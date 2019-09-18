/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tours', {
		tourID: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		guideID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		userID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		isPublished: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		city: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		country: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		minPpl: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		maxPpl: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		commission_amount: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '15'
		},
		price: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		price_kid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		price_kid_age: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		price_additional_fees: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		price_additional_fees_desc: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		groupPrice: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		groupPpl: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		score: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		number_reviews: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		type_second: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		subtype: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		othertype: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		duration: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		languages: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		daysTimeSlots: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		images: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		images_additional: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		images_all: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		values_additional: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		addresses: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		souvenirs: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		recommendations: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		instructions: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		reviews: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		included: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		notIncluded: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		display_warning: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		display_discount: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		display_information: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		display_error: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		home_position_cat: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		home_position_cat2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		creationDate: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'tours',
		underscored: true,
		timestamps: false
	});
};
