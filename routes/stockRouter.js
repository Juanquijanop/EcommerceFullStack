const express = require('express');

const StockServices = require('./../services/stockServices');
const router = express.Router();
const service = new StockServices();

router.get('/', async (req, res, next) => {
  try {
    const stock = await service.find();
    res.json(stock);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const stock = await service.findOne(id);
      res.json(stock);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newStock = await service.create(body);
      res.status(201).json(newStock);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const stock = await service.update(id, body);
      res.json(stock);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
