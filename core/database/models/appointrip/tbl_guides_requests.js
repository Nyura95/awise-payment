/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_guides_requests', {
		id_guide_request: {
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
		id_guide_document: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_user: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		idcard: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		idcard2: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		pro_card: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		selfie: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		phone: {
			type: DataTypes.INTEGER(11),
			allowNull: false
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
		tableName: 'tbl_guides_requests',
		underscored: true,
		timestamps: false
	});
};
