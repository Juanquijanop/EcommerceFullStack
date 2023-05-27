const {Product,ProductSchema} =require('./productModel')
const {Stock, StockSchema} = require('./stockModel')



function setupModels(sequelize){
  Product.init(ProductSchema,Product.config(sequelize));
  Stock.init(StockSchema, Stock.config(sequelize))


  Product.associate(sequelize.models);
  Stock.associate(sequelize.models);
}

module.exports = setupModels;
