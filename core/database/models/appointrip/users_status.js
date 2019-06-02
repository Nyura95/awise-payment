/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users_status', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		userID: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		guideID: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'users_status',
		underscored: true,
		timestamps: false
	});
};
