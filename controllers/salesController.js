const service = require('../services/salesService');

const create = async (req, res) => {
  const newSales = req.body;
  try {
    const id = await service.create(newSales);
    return res.status(201).json({ id, itemsSold: req.body });
  } catch (error) {
    throw new Error();
  }
};

module.exports = { create };