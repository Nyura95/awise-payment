const request = require('request');

exports.createAccountStripe = code => {
  return new Promise((resolve, reject) => {
    try {
      request.post('https://connect.stripe.com/oauth/token', {
        json: {
          client_secret: 'sk_test_4YLXzxlalGywuHnjIIJBtFTJ',
          code,
          grant_type: 'authorization_code'
        }
      }, (error, response, body) => {
        if (error) {
          reject(error);
        }
        resolve(body);
      });
    } catch (err) {
      reject(err);
    }
  });
};