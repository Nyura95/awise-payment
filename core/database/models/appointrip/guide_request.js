/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('guide_request', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		userID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		idcard: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		selfie: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		callback1: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		callbackDesc1: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		callback2: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		callbackDesc2: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'guide_request',
		underscored: true,
		timestamps: false
	});
};
