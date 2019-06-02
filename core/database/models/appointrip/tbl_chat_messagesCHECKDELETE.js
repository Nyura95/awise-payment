/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_chat_messagesCHECKDELETE', {
		id_message: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_chat_room: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		user_from: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		user_to: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		message: {
			type: DataTypes.TEXT,
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
		tableName: 'tbl_chat_messagesCHECKDELETE',
		underscored: true,
		timestamps: false
	});
};
