/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		userID: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		guideID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		id_schedule_guide: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true
		},
		fname: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		lname: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		score: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		gender: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		birthdate: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		monthBirthday: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		yearBirthday: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		dayBirthday: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		phone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		school: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		work: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		wallet_balance: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '0.00'
		},
		bio: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		lang: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: 'en'
		},
		languages: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		languages_all: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		avatars: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		scheduleDate: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		wishList: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: 'USD'
		},
		username: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		isUserVerified: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		isTerms: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			defaultValue: '0'
		},
		isNewsletters: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			defaultValue: '0'
		},
		isEmailVerified: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		isGuide: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		is_hotel: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			defaultValue: '0'
		},
		is_hotel_mode_kiosk: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		account_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		discount_code: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		id_discount_code: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		isVerified: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		is_guide_badged: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		is_guide_badged_status: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		is_guide_wallet_status: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		is_guide_tours_status: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		is_guide_schedule_status: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		is_guide_languages_status: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		is_active_account: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '1'
		},
		is_welcome_code: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		welcome_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		su_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		reset_psw_token: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		reset_psw_expires: {
			type: DataTypes.DATE,
			allowNull: true
		},
		creationDate: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedDate: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'users',
		underscored: true,
		timestamps: false
	});
};
