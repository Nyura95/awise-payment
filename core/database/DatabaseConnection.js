const Sequelize = require('sequelize');
const DataTypes = require('sequelize/lib/data-types');

class DatabaseConnection {
  constructor(host, username, password, db, dialect, models) {
    this.options = {
      host: host,
      username: username,
      password: password,
      db: db,
      dialect: dialect,
      models: models
    };
    this.models = {};

    // Initialize the connection
    const Op = Sequelize.Op;
    this.conn = new Sequelize(this.options.db, this.options.username, this.options.password, {
      host: this.options.host,
      dialect: this.options.dialect,
      logging: null,
      pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
      },
      operatorsAliases: {
        $eq: Op.eq,
        $ne: Op.ne,
        $gte: Op.gte,
        $gt: Op.gt,
        $lte: Op.lte,
        $lt: Op.lt,
        $not: Op.not,
        $in: Op.in,
        $notIn: Op.notIn,
        $is: Op.is,
        $like: Op.like,
        $notLike: Op.notLike,
        $iLike: Op.iLike,
        $notILike: Op.notILike,
        $regexp: Op.regexp,
        $notRegexp: Op.notRegexp,
        $iRegexp: Op.iRegexp,
        $notIRegexp: Op.notIRegexp,
        $between: Op.between,
        $notBetween: Op.notBetween,
        $overlap: Op.overlap,
        $contains: Op.contains,
        $contained: Op.contained,
        $adjacent: Op.adjacent,
        $strictLeft: Op.strictLeft,
        $strictRight: Op.strictRight,
        $noExtendRight: Op.noExtendRight,
        $noExtendLeft: Op.noExtendLeft,
        $and: Op.and,
        $or: Op.or,
        $any: Op.any,
        $all: Op.all,
        $values: Op.values,
        $col: Op.col
      }
    });
    // Loading all models
    this.loadModels();
  }

  loadModels() {
    const key = this.options.models;
    const path = require('path').join(__dirname, 'models/' + key);
    require('fs')
      .readdirSync(path)
      .forEach(file => {
        try {
          this.models[file.split('.')[0]] = require('./models/' + key + '/' + file)(this.conn, DataTypes);
        } catch (ex) {
          logger.warn("Can't import the model : " + ex.toString());
        }
      });
  }
}

module.exports = DatabaseConnection;
