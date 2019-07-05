const {
  createPaymentMethod,
  createPaymentIntent,
  createAccount,
  transferConnectAccount,
  retrievePaymentIntent,
  refundPayment
} = require('../../../helpers/request');
const { getDatabaseModels } = require('../../../core/database');
const { getDateNowUtc } = require('../../../helpers/moment');
const { checkToken } = require('../../../middleware');

module.exports = router => {
  router.post('/refund', checkToken, async (req, res) => {
    try {
      logger.info(`New refund !`);
      const { idBooking } = req.body;
      const db = getDatabaseModels('appointrip');

      logger.debug(`find the paymentIntent ...`);
      const paymentIntent = await db.tbl_payment_intent.findOne({
        where: { id_user: req.user.userID, id_booking: idBooking }
      });
      if (!paymentIntent) {
        logger.error(`Payment intent not found !`);
        return res.customJson({}, 400, 'Payment intent not found for this user !');
      }
      logger.debug(`retrieve the paymentIntent from stripe ...`);
      const intent = await retrievePaymentIntent(paymentIntent.id_payment_intent);
      if (intent.error) {
        logger.error(`Error retrieve payment intent :/`);
        console.log(intent);
        return res.customJson({}, 400, intent.error.message);
      }

      if (intent.charges.data.length === 0) {
        logger.error(`This payment is not catured !`);
        return res.customJson({}, 400, 'This payment is not catured !');
      }

      logger.debug(`refund the paymentIntent from stripe ...`);
      await refundPayment(intent.charges.data[0].id);

      logger.info(`Refund success :)`);
      res.customJson('ok');
    } catch (err) {
      logger.error(`Error refund !`);
      console.log(err);
      return res.customJson({ message: err.message }, 400, 'Error payment');
    }
  });

  router.post('/transfer', checkToken, async (req, res) => {
    try {
      logger.info(`New transfer !`);

      const db = getDatabaseModels('appointrip');
      const { idBooking } = req.body;

      if (req.user.su_id === null) {
        logger.error(`Account not connected !`);
        return res.customJson({}, 400, 'This account is not connected !');
      }

      const booking = await db.tbl_payment_intent.findOne({ where: { id_booking: idBooking } });
      if (!booking) {
        return res.customJson({}, 400, 'booking does not exist');
      }

      const transfer = await transferConnectAccount(
        parseInt(booking.amount) - (parseInt(booking.amount) * config.fees) / 100,
        req.user.su_id,
        idBooking,
        booking.id_payment_intent
      );
      if (transfer.error) {
        logger.error(`error transfer :/`);
        console.log(transfer);
        return res.customJson({}, 400, transfer.error.message);
      }

      logger.info(`Transfer success :)`);
      res.customJson('ok');
    } catch (err) {
      logger.error(`Error transfer !`);
      console.log(err);
      return res.customJson({ message: err.message }, 400, 'Error payment');
    }
  });

  router.post('/connect/guide', checkToken, async (req, res) => {
    try {
      logger.info(`New connect account !`);
      if (req.user.su_id !== null) {
        return res.customJson({}, 400, 'User already has a connected account.');
      }

      const { accountToken } = req.body;

      logger.debug(`start create account from stripe ...`);
      const account = await createAccount(accountToken, req.user.email);
      if (account.error) {
        logger.error(`error connect account :/`);
        console.log(account);
        return res.customJson({}, 400, account.error.message);
      }

      logger.debug(`update account from database ...`);
      req.user.su_id = account.id;
      req.user.updated_at = getDateNowUtc().toDate();
      await req.user.save();

      logger.info(`Account create :)`);
      res.customJson('ok');
    } catch (err) {
      logger.error(`Error connect !`);
      console.log(err);
      return res.customJson({ message: err.message }, 400, 'Error payment');
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
      const paymentIntent = await createPaymentIntent(amount, paymentMethod.id, req.user.email, idBooking);
      if (paymentIntent.error) {
        logger.error(`error payment intent :/`);
        console.log(paymentIntent);
        return res.customJson({}, 400, paymentIntent.error.message);
      }
      logger.debug(`save payment intent`);
      await db.tbl_payment_intent.create({
        id_payment_intent: paymentIntent.id,
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
        id_booking: idBooking,
        updated_at: getDateNowUtc().toDate(),
        created_at: getDateNowUtc().toDate()
      });

      logger.info(`Payment end ! thx`);
      res.customJson('ok');
    } catch (err) {
      logger.error(`Error payment !`);
      console.log(err);
      return res.customJson({ message: err.message }, 400, 'Error payment');
    }
  });

  return router;
};
