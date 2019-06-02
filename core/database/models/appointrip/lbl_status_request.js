/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lbl_status_request', {
		id_lbl_status_request: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		code: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		description: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: ''
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
		tableName: 'lbl_status_request',
		underscored: true,
		timestamps: false
	});
};
