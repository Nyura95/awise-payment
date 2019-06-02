/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_badges_requests', {
		id_badge_request: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_lbl_status_request: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		id_user: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		document: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		description: {
			type: DataTypes.TEXT,
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
		tableName: 'tbl_badges_requests',
		underscored: true,
		timestamps: false
	});
};
