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
		discount_amount: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		discount_is_fixed: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		discount_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		price_paid: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		price_discount: {
			type: DataTypes.DECIMAL,
			allowNull: true
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
		month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
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
