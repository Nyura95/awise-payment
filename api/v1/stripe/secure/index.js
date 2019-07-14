const {
  createPaymentMethod,
  createPaymentIntentSecure,
  confirmPaymentIntent
} = require('../../../../helpers/request');
const { getDatabaseModels } = require('../../../../core/database');
const { getDateNowUtc } = require('../../../../helpers/moment');
const { checkToken } = require('../../../../middleware');
module.exports = router => {

  router.post('/confirm', checkToken, async (req, res) => {
    try {
      const { idBooking } = req.body;
      const db = getDatabaseModels('appointrip');

      logger.info(`New confirm payment !`);

      logger.debug(`check if payment intent exist`);
      const paymentIntent = await db.tbl_payment_intent.findOne({ where: { id_booking: idBooking }, order: [['id', 'desc']] });
      if (!paymentIntent) {
        logger.error(`payment intent not found !`);
        return res.customJson({}, 400, 'payment intent not found !');
      }
      logger.debug(`confirm payment ...`);
      await confirmPaymentIntent(paymentIntent.id_payment_intent);

      logger.info(`Confirm end !`);
      res.customJson('ok');
    } catch (err) {
      logger.error(`Error refund !`);
      console.log(err);
      return res.customJson({ message: err.message }, 400, 'Error payment secure');
    }
  });

  router.post('/payment', checkToken, async (req, res) => {
    try {
      const { amount, card, expMonth, expYear, cvc, token, idBooking } = req.body;

      const db = getDatabaseModels('appointrip');
      logger.info(`New payment !`);

      logger.debug(`create a payment method ...`);
      const paymentMethod = await createPaymentMethod({ card, expMonth, expYear, cvc, token });
      if (paymentMethod.error) {
        logger.error(`error payment method :/`);
        console.log(paymentMethod);
        return res.customJson({}, 400, paymentMethod.error.message);
      }
      logger.debug(`save payment method`);
      const savePaymentMethod = await db.tbl_payment_method.create({
        id_payment_method: paymentMethod.id,
        object: paymentMethod.object,
        billing_details: JSON.stringify(paymentMethod.billing_details),
        card: JSON.stringify(paymentMethod.card),
        customer: 0,
        type: paymentMethod.type,
        id_user: req.user.userID,
        updated_at: getDateNowUtc().toDate(),
        created_at: getDateNowUtc().toDate()
      });

      logger.debug(`create a payment intent ...`);
      const paymentIntentSecure = await createPaymentIntentSecure(amount, paymentMethod.id, req.user.email, idBooking);
      if (paymentIntentSecure.error) {
        logger.error(`error payment intent :/`);
        console.log(paymentIntentSecure);
        return res.customJson({}, 400, paymentIntentSecure.error.message);
      }
      logger.debug(`save payment intent`);
      await db.tbl_payment_intent.create({
        id_payment_intent: paymentIntentSecure.id,
        object: paymentIntentSecure.object,
        amount: paymentIntentSecure.amount,
        capture_method: paymentIntentSecure.capture_method,
        charges: JSON.stringify(paymentIntentSecure.charges),
        client_secret: paymentIntentSecure.client_secret,
        confirmation_method: paymentIntentSecure.confirmation_method,
        currency: paymentIntentSecure.currency,
        customer: 0,
        description: paymentIntentSecure.description,
        id_payment_method: savePaymentMethod.id,
        status: paymentIntentSecure.status,
        id_user: req.user.userID,
        id_booking: idBooking,
        updated_at: getDateNowUtc().toDate(),
        created_at: getDateNowUtc().toDate()
      });

      logger.info(`Payment end ! thx`);
      res.customJson(paymentIntentSecure.id);
    } catch (err) {
      logger.error(`Error refund !`);
      console.log(err);
      return res.customJson({ message: err.message }, 400, 'Error payment');
    }
  });

  return router;
};
