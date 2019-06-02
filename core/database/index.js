
var pool = {};

exports.storeDatabaseConnection = (name, conn) => {
  pool[name] = conn;
  return true;
};

exports.getDatabaseConnection = name => {
  return pool[name];
};

exports.getDatabaseModels = name => {
  return pool[name].models;
};

exports.DatabaseConnection = require('./DatabaseConnection');
