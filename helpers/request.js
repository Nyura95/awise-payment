const request = require('request');

/**
 * @typedef {{
 * error: {
 *  code: string;
 *  doc_url: string;
 *  message: string;
 *  param: string;
 *  type: string;
 * }
 * }} IErrorStripe
 */

/**
 * @typedef {{
 *  id: string;
 *  object: string;
 *  amount: number;
 *  balance_transaction: number | null;
 *  charge: string;
 *  created: number;
 *  currency: string;
 *  metadata: object;
 *  reason: string | null;
 *  receipt_number: number | null;
 *  source_transfer_reversal: string | null;
 *  status: string;
 *  transfer_reversal: string | null;
 * }} IRefundPayment
 */
/**
 * Refund a charge
 * @param {string} idCharge
 * @version 1.0.0
 * @return {IRefundPayment | IErrorStripe}
 */
const refundPayment = idCharge => {
  return new Promise((resolve, reject) => {
    try {
      request.post(
        `https://api.stripe.com/v1/refunds`,
        {
          form: {
            charge: idCharge
          },
          headers: {
            Authorization: `Bearer ${config.stripe.token}`
          }
        },
        (error, _, body) => {
          if (error) {
            reject(error);
          }
          resolve(JSON.parse(body));
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};
exports.refundPayment = refundPayment;

/**
 * Retrieve a payment intent
 * @param {string} idPaymentIntent
 * @return {object}
 */
const retrievePaymentIntent = idPaymentIntent => {
  return new Promise((resolve, reject) => {
    try {
      request.get(
        `https://api.stripe.com/v1/payment_intents/${idPaymentIntent}`,
        {
          headers: {
            Authorization: `Bearer ${config.stripe.token}`
          }
        },
        (error, _, body) => {
          if (error) {
            reject(error);
          }
          resolve(JSON.parse(body));
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};
exports.retrievePaymentIntent = retrievePaymentIntent;

/**
 * transfer a amount for the connected accounts
 * @param {number} amount
 * @param {string} destination
 * @return {object}
 */
const transferoConnectAccount = (amount, destination) => {
  return new Promise((resolve, reject) => {
    try {
      request.post(
        'https://api.stripe.com/v1/transfers',
        {
          form: {
            amount,
            destination,
            currency: 'eur',
            transfer_group: 'ORDER_95'
          },
          headers: {
            Authorization: `Bearer ${config.stripe.token}`
          }
        },
        (error, _, body) => {
          if (error) {
            reject(error);
          }
          resolve(JSON.parse(body));
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};
exports.transferoConnectAccount = transferoConnectAccount;

/**
 * Coonect an account guide
 * @param {string} accountToken
 * @param {string} email
 * @return {object}
 */
const createAccount = (accountToken, email) => {
  return new Promise((resolve, reject) => {
    try {
      request.post(
        'https://api.stripe.com/v1/accounts',
        {
          form: {
            type: 'custom',
            country: 'FR',
            email: email,
            account_token: accountToken
          },
          headers: {
            Authorization: `Bearer ${config.stripe.token}`
          }
        },
        (error, _, body) => {
          if (error) {
            reject(error);
          }
          resolve(JSON.parse(body));
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};
exports.createAccount = createAccount;

/**
 * create a payment method for the credit card customer
 * @param {{
 * card?: number;
 * expMonth?: number;
 * expYear?: number;
 * cvc?: number;
 * }} payload
 * @returns {object}
 */
const createPaymentMethod = payload => {
  return new Promise((resolve, reject) => {
    try {
      const form = {};
      if (payload.token) {
        form['card[token]'] = payload.token;
      } else {
        form['card[number]'] = payload.card;
        form['card[exp_month]'] = payload.expMonth;
        form['card[exp_year]'] = payload.expYear;
        form['card[cvc]'] = payload.cvc;
      }

      request.post(
        'https://api.stripe.com/v1/payment_methods',
        {
          form: {
            type: 'card',
            ...form
          },
          headers: {
            Authorization: `Bearer ${config.stripe.token}`
          }
        },
        (error, _, body) => {
          if (error) {
            reject(error);
          }
          resolve(JSON.parse(body));
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};
exports.createPaymentMethod = createPaymentMethod;

/**
 * create a payment intent
 * @param {number} amount
 * @param {string} paymentMethod
 * @return {object}
 */
const createPaymentIntent = (amount, paymentMethod, email) => {
  return new Promise((resolve, reject) => {
    try {
      request.post(
        'https://api.stripe.com/v1/payment_intents',
        {
          form: {
            amount,
            currency: 'eur',
            'payment_method_types[]': 'card',
            payment_method: paymentMethod,
            confirm: true,
            receipt_email: email
          },
          headers: {
            Authorization: `Bearer ${config.stripe.token}`
          }
        },
        (error, _, body) => {
          if (error) {
            reject(error);
          }
          resolve(JSON.parse(body));
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};
exports.createPaymentIntent = createPaymentIntent;
