const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const http = require('http');
const path = require('path');

// modules
const response = require('./response');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors({ exposedHeaders: ['LINK'], methods: ['DELETE', 'GET', 'POST', 'PUT'], maxAge: 1000 }));
app.use(response);
app.use(express.static('static'));

const Router = require('express').Router;

// default logger
let _logger = console;
_logger.debug = console.log;

// default port
let _port = 3000;

// recusive parse folder
const assingRoutes = (folderPath, pathRoute) => {
  let routes = fs.readdirSync(folderPath);
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].indexOf('.js') !== -1) {
      if (routes[i].replace(/\.[^/.]+$/, '') === 'index') {
        app.use(pathRoute + '/', require(folderPath + '/' + routes[i])(Router()));
      } else {
        app.use(pathRoute + '/' + routes[i].replace(/\.[^/.]+$/, ''), require(folderPath + '/' + routes[i])(Router()));
      }
    } else {
      assingRoutes(folderPath + '/' + routes[i], pathRoute + '/' + routes[i]);
    }
  }
};

let last = "";
const print = (path, layer) => {
  if (layer.route) {
    layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))));
  } else if (layer.name === 'router' && layer.handle.stack) {
    layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))));
  } else if (layer.method) {
    const join = path.join('');
    if (last !== join) {
      last = join;
      _logger.debug(
        `${layer.method.toUpperCase()} ${path
          .concat(split(layer.regexp))
          .filter(Boolean)
          .join('/')}`
      );
    }
  }
};

const split = thing => {
  if (typeof thing === 'string') {
    return thing.split('/');
  } else if (thing.fast_slash) {
    return '';
  } else {
    var match = thing
      .toString()
      .replace('\\/?', '')
      .replace('(?=\\/|$)', '$')
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
    return match ? match[1].replace(/\\(.)/g, '$1').split('/') : '<complex:' + thing.toString() + '>';
  }
};

const getRouting = path => {
  _logger.info('Starting api ...');

  let version = fs.readdirSync(path);
  try {
    for (let i = 0; i < version.length; i++) {
      if (version[i].indexOf('.js') !== -1) continue;
      assingRoutes(path + `/${version[i]}`, '/api/' + version[i]);
    }
  } catch (err) {
    console.log(err);
  }
  app._router.stack.forEach(print.bind(null, []));
  _logger.info('Api start with success !');
};

module.exports = (path, options = {}) => {


  if (options.logger && options.logger.info && options.logger.debug && options.logger.error) {
    _logger = options.logger;
  }

  try {
    getRouting(path);
  } catch (err) {
    throw err;
  }

  if (options.folderIndex) {
    app.use('/static', express.static(options.folderIndex));
    app.all('/', function (req, res) {
      res.sendFile(`${options.folderIndex}/index.html`);
    });
  }

  app.all('*', function (req, res) {
    res.customJson('', 404);
  });

  let server = http.createServer(app);
  server.listen(
    options.port || _port,
    error => (error ? _logger.error(error) : _logger.info(`Http server listening on port ${options.port || _port}.`))
  );

  return server;
};
