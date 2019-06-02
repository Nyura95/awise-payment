'use strict';

// private variable
var _clients = [];

/**
 * Management of a customer's actions
 * @param {string} master
 * @param {Array} otherClients
 */
function Action(master, clients) {
  this.master = master;
  _clients = clients;
  return this;
}

/**
 * Sending an event to the master client
 * @param {number} id
 * @param {string} event
 * @param {any} message
 */
Action.prototype.sendMessageToMaster = function(event, message) {
  for (let i = 0; i < _clients.length; i++) {
    if (_clients[i].id === this.master) {
      _clients[i].socket.emit(event, message);
    }
  }
};

/**
 * Sending a message to only one customer targeted by ID
 * @param {number} id
 * @param {string} event
 * @param {any} message
 */
Action.prototype.sendMessageToOne = function(id, event, message) {
  for (let i = 0; i < _clients.length; i++) {
    if (_clients[i].id === id) {
      _clients[i].socket.emit(event, message);
    }
  }
};

/**
 * Send a message to all other customers
 * @param {string} event
 * @param {any} message
 */
Action.prototype.sendMessageToOthers = function(event, message) {
  for (let i = 0; i < _clients.length; i++) {
    if (_clients[i].id !== this.master) {
      _clients[i].socket.emit(event, message);
    }
  }
};

/**
 * Send a message to all customers
 * @param {string} event
 * @param {any} message
 */
Action.prototype.sendMessageToAll = function(event, message) {
  for (let i = 0; i < _clients.length; i++) {
    _clients[i].socket.emit(event, message);
  }
};

/**
 * get all the info from other customers
 * @returns infoClient[]
 */
Action.prototype.getInfoOtherClients = function() {
  var infoClient = [];
  for (let i = 0; i < _clients.length; i++) {
    if (_clients[i].id !== this.master) {
      infoClient.push({ ..._clients[i].infos, _id: _clients[i].id });
    }
  }
  return infoClient;
};

/**
 * get info from one customer
 * @param {number} id
 * @returns infoClient
 */
Action.prototype.getInfoClient = function(id) {
  for (let i = 0; i < _clients.length; i++) {
    if (id === _clients[i].id) {
      return { ..._clients[i].infos, _id: _clients[i].id };
    }
  }
  return null;
};

module.exports = Action;
