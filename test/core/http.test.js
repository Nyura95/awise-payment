const startHttp = require('../../core/http');
const path = require('path');
const Logger = require('../../core/logger');

let logger = Logger({ levelLog: 1000 });
let port = 3000;

const authorization = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.customJson('nok', 401);
  }
  next();
};

describe('Check server http', function() {
  let server = null;

  before(function() {
    server = startHttp(port, path.join(__dirname, '../..', '/api'), { logger, authorization });
  });

  it('check path', function(done) {
    chai
      .request(`http://localhost:${port}`)
      .get('/')
      .end(function(err, res) {
        console.log(typeof res.body);
        assert.deepStrictEqual('object', typeof res.body);
        assert.deepEqual(res.body, { statusCode: 404, reason: -5, comment: 'Not Found', success: false, message: {} });
        done();
      });
  });

  it('Check auth', function(done) {
    chai
      .request(`http://localhost:${port}`)
      .post('/')
      .end(function(err, res) {
        assert.deepStrictEqual('object', typeof res.body);
        assert.deepEqual(res.body, { statusCode: 404, reason: -5, comment: 'Not Found', success: false, message: {} });
        done();
      });
  });

  after(function() {
    server.close();
  });
});
