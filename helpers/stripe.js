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

// https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_EiS76uOQqCGA1oIJHkqBL0fQh7gK0sDb&scope=read_write

/**
 * create a connected account
 * @param {string} country
 * @param {string} email
 */
exports.createAccount = (account_token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const account = await stripe.accounts.create({
        type: 'standard',
        country: 'FR',
        email: 'bob@example.com',
        requested_capabilities: ['card_payments'],
        account_token
      });
      resolve(account);
    } catch (err) {
      reject(err);
    }
  });
};


// https://stripe.com/docs/connect/charges-transfers