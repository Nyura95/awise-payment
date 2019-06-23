/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_guides', {
		id_guide: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_user: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		score: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		schedule_dates: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		id_lnk_schedules_dates: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		is_verified_documents: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		siret: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		diploma: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		certification: {
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
		},
		id_card: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'tbl_guides',
		underscored: true,
		timestamps: false
	});
};
