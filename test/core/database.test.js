const { storeDatabaseConnection, DatabaseConnection, getDatabaseModels } = require("../../core/database");


describe('Check store connection', function() {
  it('Store database connection', function(done) {
    let store = storeDatabaseConnection(config.database.easering.models, new DatabaseConnection(config.database.easering));
    assert.deepStrictEqual(true, store);
    done();
  });
  it('Check get database', function(done) {
    let database = getDatabaseModels(config.database.easering.models);
    assert.deepStrictEqual('object', typeof database);
    done();
  });
  it('Check table user', function(done) {
    let database = getDatabaseModels(config.database.easering.models);
    database.users.findOne().then(user => {
      assert.deepStrictEqual(['id', 'user', 'password', 'method', 'createdAt', 'updatedAt'], Object.keys(user.dataValues));
      assert.deepStrictEqual('string', typeof user.dataValues.user);
      done();
    });
  });
}); 