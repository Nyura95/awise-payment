/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_connected_account', {
		id_connected_account: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_acct_stripe: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		id_user: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_guide: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		dob_day: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		dob_month: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		dob_year: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		business_type: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: 'individual'
		},
		individual: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		default_currency: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		fname: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		lname: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		idcard_front: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		idcard_back: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		website: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		phone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		address1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		address2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		zip_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		bank_number: {
			type: DataTypes.STRING(255),
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
		tableName: 'tbl_connected_account',
		underscored: true,
		timestamps: false
	});
};
