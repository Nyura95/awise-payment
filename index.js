global.config = require('./core/config');
global.logger = require('./core/logger')(config.logger);
global.__basedir = __dirname;


const startApi = require('./core/http');


const { storeDatabaseConnection, DatabaseConnection } = require('./core/database');


(async () => {
  console.log(`
      | \| |__      _  _\t
      |    |\ V7|U|/_|/o\ \t
      |_|\_| )/ \_/L| \_,]\t
            //
  `);

  var keys = Object.keys(config.database);
  for (let i = 0; i < keys.length; i++) {
    logger.debug('Database instance : ' + keys[i]);
    var currentDatabase = config.database[keys[i]];
    storeDatabaseConnection(
      keys[i],
      new DatabaseConnection(
        currentDatabase.host,
        currentDatabase.username,
        currentDatabase.password,
        currentDatabase.db,
        currentDatabase.dialect,
        currentDatabase.models
      )
    );
  }

  startApi(__dirname + '/api', { ...config.http, logger, folderIndex: __dirname + '/view' });

})();
