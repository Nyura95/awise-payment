/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lbl_sub_categories', {
		id_lbl_sub_categories: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		inherit: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		category: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		label: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		lockey_cat: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		value: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		key: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sub_category: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		lockey_sub: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		is_active: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'lbl_sub_categories',
		underscored: true,
		timestamps: false
	});
};
