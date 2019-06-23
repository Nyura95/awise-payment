const request = require('request');

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
        form['card[token]'] = payload.token
      } else {
        form['card[number]'] = payload.card;
        form['card[exp_month]'] = payload.expMonth;
        form['card[exp_year]'] = payload.expYear;
        form['card[cvc]'] = payload.cvc;
      }

      request.post('https://api.stripe.com/v1/payment_methods', {
        form: {
          type: 'card',
          ...form
        },
        headers: {
          'Authorization': config.stripe.token
        }
      }, (error, _, body) => {
        if (error) {
          reject(error);
        }
        resolve(JSON.parse(body));
      });
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
exports.createPaymentIntent = (amount, paymentMethod) => {
  return new Promise((resolve, reject) => {
    try {
      request.post('https://api.stripe.com/v1/payment_intents', {
        form: {
          amount,
          currency: 'eur',
          'payment_method_types[]': 'card',
          payment_method: paymentMethod,
          confirm: true
        },
        headers: {
          'Authorization': config.stripe.token
        }
      }, (error, _, body) => {
        if (error) {
          reject(error);
        }
        resolve(JSON.parse(body));
      });
    } catch (err) {
      reject(err);
    }
  });
};

