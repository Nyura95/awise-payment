/**
 * @description Get value object from attrivute sequelize
 * @param {Sequelize} row
 */
exports.freeze = row => {
  return row.dataValues;
};

/**
 * @description Get value object from attrivute sequelize
 * @param {Sequelize[]} rows
 */
exports.freezeAll = rows => {
  const freeze = [];
  for (let i = 0; i < rows.length; i++) {
    freeze.push(rows[i].dataValues);
  }
  return freeze;
};
