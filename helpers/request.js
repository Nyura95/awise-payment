const request = require('request');

/**
 * create a payment method for the credit card customer
 * @param payload {card: number, expMonth: number, expYear: number, cvc: number}
 * @returns object
 */
exports.createPaymentMethod = payload => {
  return new Promise((resolve, reject) => {
    try {
      request.post('https://api.stripe.com/v1/payment_methods', {
        form: {
          type: 'card',
          'card[number]': payload.card,
          'card[exp_month]': payload.expMonth,
          'card[exp_year]': payload.expYear,
          'card[cvc]': payload.cvc,
        },
        headers: {
          'Authorization': 'Bearer sk_test_4YLXzxlalGywuHnjIIJBtFTJ'
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
exports.cratePaymentIntent = (amount, paymentMethod) => {
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
          'Authorization': 'Bearer sk_test_4YLXzxlalGywuHnjIIJBtFTJ'
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

