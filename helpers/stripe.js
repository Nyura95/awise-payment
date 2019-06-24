const stripe = require('stripe')(config.stripe.token);

exports.createNewAccount = (amount, currency) => {
  return new Promise(async (resolve, reject) => {
    try {
      stripe.accounts.create(
        {
          type: 'custom',
          country: 'US',
          email: 'bob@example.com',
          requested_capabilities: ['card_payments']
        },
        function(err, account) {
          if (err) return reject(err);
          resolve(account);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};
