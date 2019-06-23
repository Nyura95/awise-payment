/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_payment_method', {
		id: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_payment_method: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		object: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		billing_details: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		card: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		customer: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		id_user: {
			type: DataTypes.INTEGER(5),
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
		tableName: 'tbl_payment_method',
		underscored: true,
		timestamps: false
	});
};
