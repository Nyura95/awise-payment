const request = require('request');

export const createAccountStripe = (code) => {
  return new Promise(async (resolve, reject) => {
    const response = await request.post('https://connect.stripe.com/oauth/token', {
      json: {
        client_secret: 'sk_test_4YLXzxlalGywuHnjIIJBtFTJ',
        code,
        grant_type: 'authorization_code'
      }
    });
    console.log(response)
  });
};