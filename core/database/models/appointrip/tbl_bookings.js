/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_bookings', {
		id_booking: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_booking_tourist: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		id_tour: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_user: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_guide: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_lbl_status_booking: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		tour_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		tour_timeslot: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		duration: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		time_start: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		time_end: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		price_unit: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		price_total: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		people: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		score: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		f_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: 'Awiser'
		},
		review: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		is_displayed: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		is_reviewed: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		is_paid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		objStripe: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		id_stripe: {
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
		tableName: 'tbl_bookings',
		underscored: true,
		timestamps: false
	});
};
