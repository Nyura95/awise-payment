/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_log_transfer', {
		id: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_booking: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		id_user: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		id_ch: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		fees: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		amount: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		amount_fees: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		amount_transfer: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'tbl_log_transfer',
		underscored: true,
		timestamps: false
	});
};
