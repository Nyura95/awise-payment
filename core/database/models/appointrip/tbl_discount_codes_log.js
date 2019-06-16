/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_discount_codes_log', {
		id_discount_codes_log: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_discount_code: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		discount_code: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		id_booking: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false
		},
		id_user: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false
		},
		id_tour: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'tbl_discount_codes_log',
		underscored: true,
		timestamps: false
	});
};
