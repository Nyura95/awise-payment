/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_schedules_guides', {
		id_schedule_guide: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_guide: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		dates: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		date_day: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		date_month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		date_year: {
			type: DataTypes.INTEGER(11),
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
		tableName: 'tbl_schedules_guides',
		underscored: true,
		timestamps: false
	});
};
