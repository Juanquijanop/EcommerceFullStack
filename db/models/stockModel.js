const { Model, DataTypes, Sequelize} = require('sequelize');
const {PRODUCT_TABLE} = require('./productModel')

const STOCK_TABLE = 'stock';

const StockSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_product: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}


class Stock extends Model {


  static associate(models) {
    this.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'id_product'
    });
  }

    static config(sequelize) {
      return {
        sequelize,
        tableName: STOCK_TABLE,
        modelName: 'Stock',
        timestamps: false
      }
    }
  }




module.exports = { STOCK_TABLE, StockSchema, Stock}
