/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_payment_intent', {
		id: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_payment_intent: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		object: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		amount: {
			type: DataTypes.INTEGER(8),
			allowNull: true
		},
		capture_method: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		charges: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		client_secret: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		confirmation_method: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		customer: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		id_payment_method: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		status: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		id_user: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		id_booking: {
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
		tableName: 'tbl_payment_intent',
		underscored: true,
		timestamps: false
	});
};
