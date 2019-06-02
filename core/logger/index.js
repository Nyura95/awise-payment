let moment = require('moment');
let colors = require('colors');
let fs = require('fs');
let _ = require('lodash');

let _config = {
  levelLog: 0,
  table: {
    center: true,
    borderChar: '|',
    lineChar: '-',
    crossingChar: '+',
    minSpace: 35
  },
  format: 'DD/MM/YYYY - HH:mm:ss',
  loggers: [
    { name: 'info', color: 'blue', save: false, level: 1 },
    { name: 'error', color: 'red', save: false, level: 3 },
    { name: 'debug', color: 'green', save: false, level: 0 }
  ]
};

let _logger = [];
let _me = { name: 'logger', color: 'cyan', save: false };

/**
 * @description use the logger for log in a table (params needed)
 * @param {logger} logger
 * @param {[string]} message
 */
const logInTable = (level, message) => {
  // set minRange
  let minRange = _config.table.minSpace;

  for (let i = 0; i < message.length; i++) {
    // check if is a object
    if (typeof message[i] === 'object') {
      message[i] = JSON.stringify(message[i]);
    }

    if (minRange < message[i].length) {
      minRange = message[i].length;
    }
  }

  // set first and last bar
  let bar = _config.table.crossingChar;
  for (let i = 0; i < minRange; i++) {
    bar = bar + _config.table.lineChar;
  }
  bar = bar + _config.table.crossingChar;

  // fist bar
  logger(level, bar);
  // send message
  for (let i = 0; i < message.length; i++) {
    let nbSpace = minRange - message[i].length;
    if (_config.table.center) {
      for (let y = 0; y < nbSpace / 2; y++) {
        message[i] = ' ' + message[i] + ' ';
      }
      // if message is sup, repill
      while (message[i].length > minRange) {
        message[i] = message[i].substr(0, message[i].length - 1);
      }
    } else {
      while (message[i].length < minRange) {
        message[i] = message[i] + ' ';
      }
    }
    logger(level, _config.table.borderChar + message[i] + _config.table.borderChar);
  }
  // last bar
  logger(level, bar);
};

/**
 * @desc log in console and in filelog
 * @param {string} name
 * @param {string} color
 * @param {string} message
 */
const logger = (logger, message) => {
  if (logger.level >= _config.levelLog) {
    console.log(
      (logger.name || 'info')[logger.color || 'blue'],
      `(${moment().format('DD/MM/YYYY - HH:mm:ss')}):`[logger.color || 'blue'],
      (typeof message === 'object' ? Object.stringify(message) || '' : message || '')[logger.color || 'blue']
    );
    if (logger.save || false) {
      fs.appendFile(
        `${logger.name || 'info'}.log`,
        `${logger.name || 'info'} (${moment().format('DD/MM/YYYY - HH:mm:ss')}): ${
          typeof message === 'object' ? Object.stringify(message) || '' : message || ''
        } \n`,
        function(err) {}
      );
    }
  }
};

/**
 * @description create a file log
 * @param {string} filename
 */
const createFile = filename => {
  fs.open(filename, 'r', function(err, fd) {
    if (err) {
      fs.writeFile(filename, '', function(err) {
        if (err) console.log(err);
      });
    }
  });
};

module.exports = config => {
  let _logger = {};
  _.merge(_config, config);

  // create all loggers log
  for (let i = 0; i < _config.loggers.length; i++) {
    if (_config.loggers[i].save) {
      createFile(`${_config.loggers[i].name}.log`);
    }
    _logger[_config.loggers[i].name] = function(...message) {
      // if several messages
      if (message.length > 1) {
        // log with a table
        let _message = [];
        for (let i = 0; i < message.length; i++) {
          if (Array.isArray(message[i])) {
            _message = _.concat(_message, message[i]);
          } else {
            _message.push(message[i]);
          }
        }

        return logInTable(_config.loggers[i], _message);
      }
      // log normaly
      // this.message[keys[i]](message[0])
      logger(_config.loggers[i], message[0]);
      return this;
    };
  }

  return _logger;
};
