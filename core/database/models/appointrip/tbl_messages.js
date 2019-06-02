/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_messages', {
		id_message: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_user: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		id_conversation: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		message: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		id_status: {
			type: DataTypes.INTEGER(5),
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
		tableName: 'tbl_messages',
		underscored: true,
		timestamps: false
	});
};
