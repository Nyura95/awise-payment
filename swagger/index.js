const login = require('./login');
const stripe = require('./stripe');
module.exports = {
  ...login,
  ...stripe
};