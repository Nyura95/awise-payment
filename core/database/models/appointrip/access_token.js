/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('access_token', {
		id: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		token: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		refresh_token: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		flag_delete: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATEONLY,
			allowNull: false
		}
	}, {
		tableName: 'access_token',
		underscored: true,
		timestamps: false
	});
};
