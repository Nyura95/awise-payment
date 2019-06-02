/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lbl_status_messenger', {
		id_status: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		lockey: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		label: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'lbl_status_messenger',
		underscored: true,
		timestamps: false
	});
};
