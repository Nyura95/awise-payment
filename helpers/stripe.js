const stripe = require('stripe')('sk_test_4YLXzxlalGywuHnjIIJBtFTJ');

/**
 * create new charge stripe
 * @param {number} amount
 * @param {string} description
 * @param {string} source
 * @param {string} receipt_email
 */
exports.createCharge = (amount, description, source, receipt_email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const charge = await stripe.charges.create({
        amount,
        description,
        source,
        receipt_email,
        currency: 'eur'
      });
      resolve(charge);
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * create a connected account
 * @param {string} country
 * @param {string} email
 */
exports.createAccount = (description, email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const account = await stripe.accounts.create({
        country: 'US',
        type: 'custom',
        requested_capabilities: ['card_payments']
      });
      resolve(account);
    } catch (err) {
      reject(err);
    }
  });
};
