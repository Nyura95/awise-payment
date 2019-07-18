const create = require('./create');
const refund = require('./refund');
const transfer = require('./transfer');
const connect = require('./connect');
const secure = require('./secure');

module.exports = {
  ...create,
  ...refund,
  ...transfer,
  ...connect,
  ...secure
}