const { createPaymentMethod, createPaymentIntent } = require('../../../helpers/request');
const { getDatabaseModels } = require('../../../core/database');
const { getDateNowUtc } = require('../../../helpers/moment');
const { checkToken } = require('../../../middleware');
const { exists } = require('../../../helpers/object');

module.exports = router => {
  router.post('/payment', checkToken, async (req, res) => {
    try {

      const { amount, card, expMonth, expYear, cvc, token } = req.body;

      const db = getDatabaseModels('appointrip');
      logger.info(`New payment !`);

      logger.debug(`create a payment method ...`);
      const paymentMethod = await createPaymentMethod({ card, expMonth, expYear, cvc, token });
      if (paymentMethod.error) {
        logger.error(`error payment method :/`);
        console.log(paymentMethod);
        return res.customJson({}, 400, paymentMethod.message);
      }
      logger.debug(`save payment method`);
      const savePaymentMethodawait = await db.tbl_payment_method.create({
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
      const paymentIntent = await createPaymentIntent(amount, paymentMethod.id);
      if (paymentIntent.error) {
        logger.error(`error payment intent :/`);
        console.log(paymentIntent);
        return res.customJson({}, 400, paymentIntent.message);
      }
      logger.debug(`save payment intent`);
      await db.tbl_payment_intent.create({
        id_payment_intent: paymentMethod.id,
        object: paymentIntent.object,
        amount: paymentIntent.amount,
        capture_method: paymentIntent.capture_method,
        charges: JSON.stringify(paymentIntent.charges),
        client_secret: paymentIntent.client_secret,
        confirmation_method: paymentIntent.confirmation_method,
        currency: paymentIntent.currency,
        customer: 0,
        description: paymentIntent.description,
        id_payment_method: savePaymentMethodawait.id,
        status: paymentIntent.status,
        id_user: req.user.userID,
        updated_at: getDateNowUtc().toDate(),
        created_at: getDateNowUtc().toDate()
      });

      logger.info(`Payment end ! thx`);
      res.customJson('ok');
    } catch (err) {
      return res.customJson({ message: err.message }, 400, 'Error payment');
    }
  });

  return router;
};