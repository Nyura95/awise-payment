const Logger = require("../../core/logger");

let logger = Logger({ levelLog: 1000 });

describe('Check logger', function() {
  it('Check init logger', function(done) {
    assert.deepStrictEqual('object', typeof logger);
    done();
  });
  it('Check log', function(done) {
    let keys = Object.keys(logger);
    assert.deepStrictEqual(true, (keys.length > 0));
    assert.ok(logger[keys[0]]('test'));
    done();
  });
}); 