/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_action_payment_tour', {
		id: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		token_id: {
			type: DataTypes.INTEGER(5),
			allowNull: true
		},
		id_user: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		id_tour: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		id_booking: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		amount: {
			type: DataTypes.INTEGER(5),
			allowNull: true
		},
		body_send: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		body_receive: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		url_payment: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		version: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		agent_user: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		statut: {
			type: DataTypes.INTEGER(5),
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'tbl_action_payment_tour',
		underscored: true,
		timestamps: false
	});
};
