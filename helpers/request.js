const request = require('request');

exports.createAccountStripe = code => {
  return new Promise((resolve, reject) => {
    try {
      request.post('https://connect.stripe.com/oauth/token', {
        json: {
          client_secret: config.stripe.token,
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

exports.getAccountStripe = code => {
  return new Promise((resolve, reject) => {
    try {
      request.post('https://connect.stripe.com/oauth/token', {
        json: {
          client_secret: config.stripe.token,
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