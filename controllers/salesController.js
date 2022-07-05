const service = require('../services/salesService');

const create = async (req, res) => {
  const newSale = await service.create(req.body);
  return res.status(201).json(newSale);
};

module.exports = { create };