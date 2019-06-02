'use strict';

var _logger = require('./logger');

// Creating private variables
var _events = {};

function Events(events = {}) {
  // Parameter check
  if (typeof events !== 'object' || Array.isArray(events)) {
    throw 'The events variable must be an array';
  }

  // Checking of events
  var keys = Object.keys(events);
  for (let i = 0; i < keys.length; i++) {
    if (!checkEvent(keys[i], events[keys[i]])) {
      _logger.error('An event must be in the form {name: Function}');
      continue;
    }
    // Add to the private variable
    _events[keys[i]] = events[keys[i]];
  }
}

/**
 * Adding a new event
 * @param {{name: string, action: Function}} event
 * @returns {number}
 */
Events.prototype.add = function(name, action) {
  // Verification of the event
  if (!checkEvent(name, action)) {
    _logger.error('Event added does not match the criteria');
    return null;
  }
  // Adding the event in the table
  _events[name] = action;
  // Return of the place of the event in the table
  return name;
};

/**
 * Delete an event
 */
Events.prototype.remove = function(name) {
  // Verification of the sent parameter
  if (typeof name === 'string') {
    _logger.error('Can not delete an event');
    return null;
  }
  // deleting the event in the table
  delete _event[name];
};

/**
 * Get of all events
 */
Events.prototype.get = function() {
  return _events;
};

/**
 * Verification of the conformity of the event object
 * @param {object} event
 * @return {boolean}
 */
function checkEvent(name, action) {
  if (typeof name !== 'string' || typeof action !== 'function') {
    return false;
  }

  return true;
}

module.exports = Events;
