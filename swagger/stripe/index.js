const create = require('./create');
const refund = require('./refund');
const transfert = require('./transfert');
const connect = require('./connect');

module.exports = {
  ...create,
  ...refund,
  ...transfert,
  ...connect
}