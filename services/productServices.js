const {models} = require('./../libs/sequelize');


class ProductService {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data)
    return newProduct;
  }

  async find() {
    const products = await models.Product.findAll();
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if(!product){
      throw Error('No se encontro el producto')
    }
    return user;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  async delete(id) {
    const productDeleted = await this.findOne(id)
    await productDeleted.destroy();
  }
}

module.exports = ProductService;
