const service = require('../services/productsService');

const getAll = async (req, res) => {
  try {
    const products = await service.getAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await service.getById(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { getAll, getById };