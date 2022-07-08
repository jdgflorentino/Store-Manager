const service = require('../services/salesService');

const getById = async (req, res) => { 
  const sale = await service.getById(req.params.id);
  return res.status(200).json(sale);
};

const getAll = async (req, res) => { 
  const sales = await service.getAll();
  return res.status(200).json(sales);
};

const create = async (req, res) => {
  const result = await service.create(req.body);
  return res.status(201).json({ id: result, itemsSold: req.body });
};

module.exports = { create, getAll, getById };
