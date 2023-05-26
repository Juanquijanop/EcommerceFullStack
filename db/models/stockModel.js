const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Configura la conexión a la base de datos en sequelize.js
const Product = require('./product'); // Importa la entidad de Productos

const STOCK_TABLE = 'stock';

class Stock extends Model {}

Stock.init({
  id_stock: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id_producto'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}, {
  sequelize,
  tableName: STOCK_TABLE,
  modelName: 'Stock',
  timestamps: false
});

Stock.belongsTo(Product, { foreignKey: 'id_producto' });

module.exports = Stock;
