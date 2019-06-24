const request = require('request');

/**
 * Refund a charge
 * @param idCharge string
 * @return object
 */
exports.refundPayment = idCharge => {
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

/**
 * Retrieve a payment intent
 * @param idPaymentIntent string
 * @return object
 */
exports.retrievePaymentIntent = idPaymentIntent => {
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

/**
 * Transfert a amount for the connected accounts
 * @param amount number
 * @param destination string
 * @return object
 */
exports.transfertToConnectAccount = (amount, destination) => {
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

/**
 * Coonect an account guide
 * @param accountToken string
 * @param email string
 * @return object
 */
exports.createAccount = (accountToken, email) => {
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

/**
 * create a payment method for the credit card customer
 * @param payload {card: number, expMonth: number, expYear: number, cvc: number}
 * @returns object
 */
exports.createPaymentMethod = payload => {
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

/**
 * create a payment intent
 * @param amount number
 * @param paymentMethod string
 * @return object
 */
exports.createPaymentIntent = (amount, paymentMethod, email) => {
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
            manual: 'manual',
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
