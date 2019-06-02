/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lbl_token_payment', {
		id: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		locKey: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		label: {
			type: DataTypes.STRING(255),
			allowNull: false
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
		tableName: 'lbl_token_payment',
		underscored: true,
		timestamps: false
	});
};
