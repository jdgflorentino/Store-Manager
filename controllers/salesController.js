const service = require('../services/salesService');

const create = async (req, res) => {
  const result = await service.create(req.body);
  return res.status(201).json([{ id: result, itemsSold: req.body }]);
};

module.exports = { create };