/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_token_payment', {
		id: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		token: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		flag_delete: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		statut: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		lifetime_max: {
			type: DataTypes.DATE,
			allowNull: false
		},
		action_nb: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		action_max: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER(5),
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
		tableName: 'tbl_token_payment',
		underscored: true,
		timestamps: false
	});
};
