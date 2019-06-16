/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_discount_code', {
		id_discount_code: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		code: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		code_qr: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		desc: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		policy: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		uses: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true
		},
		max_uses: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true
		},
		max_uses_user: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		type: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false
		},
		discount_amount: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		discount_amount_number: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		discount_amount_percentage: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		is_fixed: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		is_welcome_code: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		starts_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		expires_at: {
			type: DataTypes.DATE,
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
		tableName: 'tbl_discount_code',
		underscored: true,
		timestamps: false
	});
};
