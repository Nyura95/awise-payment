const stripe = require('stripe')(config.stripe.token);

exports.listConnectAccount = (amount, currency) => {
  return new Promise(async (resolve, reject) => {
    try {
      stripe.paymentIntents.create(
        {
          payment_method_types: ['card'],
          amount,
          currency
        },
        function (err, accounts) {
          if (err) return reject(err);
          resolve(accounts);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};
