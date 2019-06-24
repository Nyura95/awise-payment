const {
  createPaymentMethod,
  createPaymentIntent,
  createAccount,
  transfertToCoonectAccount
} = require('../../../helpers/request');
const { getDatabaseModels } = require('../../../core/database');
const { getDateNowUtc } = require('../../../helpers/moment');
const { checkToken } = require('../../../middleware');

module.exports = router => {
  router.post('/transfert', checkToken, async (req, res) => {
    try {
      logger.info(`New transfert !`);
      if (req.user.su_id === null) {
        return res.customJson({ message: err.message }, 400, 'This account is not connected !');
      }

      const { amount } = req.body;

      const transfert = await transfertToCoonectAccount(amount, req.user.su_id);
      if (transfert.error) {
        logger.error(`error transfert :/`);
        console.log(transfert);
        return res.customJson({}, 400, transfert.message);
      }

      logger.info(`Transfert success :)`);
      res.customJson('ok');
    } catch (err) {
      logger.error(`Error transfert !`);
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
        return res.customJson({}, 400, account.message);
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
      logger.error(`Error payment !`);
      console.log(err);
      return res.customJson({ message: err.message }, 400, 'Error payment');
    }
  });

  return router;
};
