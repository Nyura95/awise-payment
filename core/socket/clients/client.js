'use strict';

var Action = require('./action');

function Client(socket, infos, clients) {
  // Assigning a unique ID
  this.id = Math.random()
    .toString(36)
    .substr(2, 9);
  this.socket = socket;
  this.infos = infos;
  this.actions = new Action(this.id, clients);
}

module.exports = Client;
