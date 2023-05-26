const {models} = require('./../libs/sequelize');


class StockService {
  constructor() {}

  async create(data) {
    const newStock = await models.Stock.create(data)
    return newStock;
  }

  async find() {
    const stock = await models.Stock.findAll();
    return stock;
  }

  async findOne(id) {
    const stock = await models.Stock.findByPk(id);
    if(!stock){
      throw Error('No se encontro el producto')
    }
    return stock;
  }

  async update(id, changes) {
    const stock = await this.findOne(id);
    const rta = await stock.update(changes);
    return rta;
  }

  async delete(id) {
    const stockDeleted = await this.findOne(id)
    await stockDeleted.destroy();
  }
}

module.exports = StockService;
