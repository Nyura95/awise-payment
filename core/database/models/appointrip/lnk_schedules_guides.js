/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lnk_schedules_guides', {
		id_lnk_schedule_guide: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_schedule_date: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_guide: {
			type: DataTypes.INTEGER(11),
			allowNull: false
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
		tableName: 'lnk_schedules_guides',
		underscored: true,
		timestamps: false
	});
};
