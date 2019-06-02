var assert = require('assert');
const chai = require('chai');
const expect = require('chai').expect;
const yaml = require('js-yaml');
const fs = require('fs');

chai.use(require('chai-http'));

global.assert = assert;
global.chai = chai;
global.expect = expect;

/*describe('Config', function() {
  it('Check if .env exist', function(done) {
    assert.deepStrictEqual(true, fs.existsSync('./.env'));
    done();
  });
  it('Check if config exist', function(done) {
    assert.deepStrictEqual(true, fs.existsSync(`./config.${fs.readFileSync('./.env', 'utf8')}.yaml`));
    done();
  });
  it('Get config', function(done) {
    let config = yaml.safeLoad(fs.readFileSync(`./config.${fs.readFileSync('./.env', 'utf8')}.yaml`, 'utf8'));
    global.config = config;
    assert.deepStrictEqual('object', typeof config);
    done();
  });
});*/

// Core
//require('./core/logger.test');
require('./core/http.test');

// controller
//require('./controller/simpleController.test');
