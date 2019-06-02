const connections = {};

/**
 * Store a broker connection
 * @param {*} name
 * @param {*} brokerConnection
 */
exports.storeBrokerConnection = (name, brokerConnection) => {
  connections[name] = brokerConnection;
};

/**
 * Get a broker description from his name
 * @param {*} name
 */
exports.getBrokerConnection = name => {
  return connections[name];
};

exports.BrokerConnection = require('./BrokerConnection');
