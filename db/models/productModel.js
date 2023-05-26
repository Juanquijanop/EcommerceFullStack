const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Configura la conexión a la base de datos en sequelize.js

const PRODUCT_TABLE = 'products';

class Product extends Model {}

Product.init({
  id_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  tableName: PRODUCT_TABLE,
  modelName: 'Product',
  timestamps: false
});

module.exports = Product;
