/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_connect_guide', {
		id: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		connect_token: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		id_guide: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		stripe_publishable_key: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		scope: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		stripe_user_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		refresh_token: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		access_token: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'tbl_connect_guide',
		underscored: true,
		timestamps: false
	});
};
