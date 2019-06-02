/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_transactions', {
		id_transaction: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_guide: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_user: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_tour: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_booking: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		amount_gross: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		amount_net: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		direction: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		transaction_type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		is_withdrawn: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		is_issue: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
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
		tableName: 'tbl_transactions',
		underscored: true,
		timestamps: false
	});
};
