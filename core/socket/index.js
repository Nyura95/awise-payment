'use strict';
/**
 * Io Server Manager
 */

// Declaration of the modules
var http = require('http');
var socketIO = require('socket.io');
var Clients = require('./clients/index');
var Events = require('./events');

// Creating private variables
var _server = http.createServer();
var _io = socketIO(_server);
var _logger = require('./logger');
var _options = { logger: true, levelLogger: 0, personalLogger: console.log, trigger: { disconnect: function() {} } };

function Socket(port, events = [], options = _options) {
  // check if port is set
  if (!port || typeof port !== 'number') {
    throw 'Please, pass a number to start the server !';
  }

  // level du logger
  _logger.setLogger(options.personalLogger);
  _logger.active(options.logger);
  _logger.setLevel(options.levelLogger);

  var _port = 0;
  Object.defineProperty(this, 'port', {
    get: function() {
      return _port;
    },
    set: function(port) {
      if (typeof port !== 'number') {
        throw 'This variable is only number';
      }
      // Change of the private variable
      _port = port;
      // Starting the server under the new port
      runServer(_port);
    }
  });

  // port assignment
  this.port = port;

  // Instantiation of clients
  this.clients = new Clients();

  // Instantiation of events
  this.events = new Events(events);

  var _this = this;

  setInterval(function() {
    _logger.debug('Number of connected customers ' + _this.clients.get().length);
  }, 5000);

  // Event of a new customer connection
  _io.on('connect', function(socket) {
    // Adding a new customer and recovering
    var client = _this.clients.findOne(_this.clients.add(socket));

    if (!client) {
      return;
    }

    // Get events
    var events = _this.events.get();
    // Add all event
    var keys = Object.keys(events);
    for (let i = 0; i < keys.length; i++) {
      socket.on(keys[i], function(message) {
        events[keys[i]](message, client);
      });
    }

    socket.on('disconnect', function() {
      options.trigger.disconnect(client);
      // Delete the client
      _this.clients.remove(client.id);
      // disconnect the socket
      socket.disconnect();
    });
  });
}

/**
 * Private method - run the server with a specific port
 * @param {number} port
 */
function runServer(port) {
  // check if server is running
  if (_server.address()) {
    // close if running
    _server.close();
  }
  if (port) {
    // start the server
    _server.listen(port, error =>
      error ? _logger.error(error) : _logger.info(`Socket server listening on port ${port}.`)
    );
  }
}

module.exports = Socket;
