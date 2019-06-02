/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('discount_code', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		}
	}, {
		tableName: 'discount_code',
		underscored: true,
		timestamps: false
	});
};
