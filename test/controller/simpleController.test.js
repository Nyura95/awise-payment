  const SimpleController = require('../../simpleController');

describe('Check controller', function() {
  let simpleController = null;
  before(function() {
    simpleController = new SimpleController(30);
  });

  it('Simple controller', function(done) {
    assert.deepStrictEqual('Your account : 30', simpleController.getStringCount());
    simpleController.count += 70;
    assert.deepStrictEqual('Your account : 50', simpleController.getStringCount());
    done();
  });
}); 