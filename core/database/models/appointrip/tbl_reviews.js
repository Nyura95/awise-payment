/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_reviews', {
		id_review: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_tour: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_booking: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_guide: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_user: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		score: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		review: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		is_displayed: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		is_reviewed: {
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
		tableName: 'tbl_reviews',
		underscored: true,
		timestamps: false
	});
};
