/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_conversations', {
		id_conversation: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		uniq_hash: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		id_creator: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		token_creator: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		id_receiver: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		token_receiver: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		id_last_message: {
			type: DataTypes.INTEGER(5),
			allowNull: true
		},
		id_first_message: {
			type: DataTypes.INTEGER(5),
			allowNull: true
		},
		id_status: {
			type: DataTypes.INTEGER(5),
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00'
		}
	}, {
		tableName: 'tbl_conversations',
		underscored: true,
		timestamps: false
	});
};
