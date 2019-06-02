/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_action_payment', {
		id: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		token_id: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		statut: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		action_type_id: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		transaction_id: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		table_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		version: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		agent_user: {
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
		tableName: 'tbl_action_payment',
		underscored: true,
		timestamps: false
	});
};
