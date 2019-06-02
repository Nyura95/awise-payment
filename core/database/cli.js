/*
 * @Author: Nicolas MARTINS 
 * @Date: 2018-04-19 22:19:58 
 * @Last Modified by: Nicolas MARTINS
 * @Last Modified time: 2018-04-19 22:28:40
 */

const SequelizeAuto = require('sequelize-auto');

// Loading the configuration
// global.config = require('../config');

module.exports = function(config) {
  for (const i in config.database) {
    const dbConfig = config.database[i];
    const auto = new SequelizeAuto(dbConfig.db, dbConfig.username, dbConfig.password, {
      host: dbConfig.host,
      dialect: dbConfig.dialect,
      directory: __dirname + '/models/' + i,
      additional: {
        underscored: true,
        timestamps: false
      }
    });
    auto.run();
  }
}

