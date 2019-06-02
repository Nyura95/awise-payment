/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bookingCHECKDELETE', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		guideID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		tourID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		userID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		date_tour: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		time_slot_tour: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		time_start: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		time_end: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		price: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		people: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		score: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		review: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	}, {
		tableName: 'bookingCHECKDELETE',
		underscored: true,
		timestamps: false
	});
};
