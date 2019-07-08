/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ad_tbl_admin', {
		id_admin: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		fname: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		lname: {
			type: DataTypes.STRING(255),
			allowNull: false,
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
		tableName: 'ad_tbl_admin',
		underscored: true,
		timestamps: false
	});
};
