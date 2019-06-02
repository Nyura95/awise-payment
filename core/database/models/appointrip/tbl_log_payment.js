/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_log_payment', {
		id: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		action_id: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		locKey: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'tbl_log_payment',
		underscored: true,
		timestamps: false
	});
};
