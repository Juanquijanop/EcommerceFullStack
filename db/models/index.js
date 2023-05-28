const {Product,ProductSchema} =require('./productModel')
const {Stock, StockSchema} = require('./stockModel')
const {Category, CategorySchema} = require('./categoryModel')



function setupModels(sequelize){
  Product.init(ProductSchema,Product.config(sequelize));
  Stock.init(StockSchema, Stock.config(sequelize))
  Category.init(CategorySchema,Category.config(sequelize))


  Product.associate(sequelize.models);
  Stock.associate(sequelize.models);
  Category.associate(sequelize.models)
}

module.exports = setupModels;
