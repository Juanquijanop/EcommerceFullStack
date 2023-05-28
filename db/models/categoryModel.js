const { Model, DataTypes, Sequelize} = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}


class Category extends Model {

  static associate(models) {
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'category_id'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }
}



module.exports = { CATEGORY_TABLE, CategorySchema, Category}
