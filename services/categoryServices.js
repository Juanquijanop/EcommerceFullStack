const {models} = require('./../libs/sequelize');


class CategoryService {
  constructor() {}

  async create(data) {
    const newCategory = await models.Category.create(data)
    return newCategory;
  }

  async find() {
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id);
    if(!category){
      throw Error('No se encontro la categoria')
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }

  async delete(id) {
    const categoryDeleted = await this.findOne(id)
    await categoryDeleted.destroy();
  }
}

module.exports = CategoryService;
