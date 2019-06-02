/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_chat_rooms', {
		id_chat_room: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_user: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_guide: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(100),
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
		tableName: 'tbl_chat_rooms',
		underscored: true,
		timestamps: false
	});
};
