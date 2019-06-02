/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_guides_documents', {
		id_guide_document: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_user: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		idcard: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		selfie: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		idcard2: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		phone: {
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
		tableName: 'tbl_guides_documents',
		underscored: true,
		timestamps: false
	});
};
