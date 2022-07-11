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

const create = async (req, res) => {
  const { name } = req.body;
  try {
    const newProduct = { name };
    const { insertId: id } = await service.create(newProduct);
    return res.status(201).json({ id, name });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

const update = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const newProduct = { name, id };
  const result = await service.update(newProduct);
  if (result[0].affectedRows === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json({ id, name });
};

const deleteByID = async (req, res) => { 
  const { id } = req.params;
  const result = await service.deleteByID(id);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(204).end();
};

module.exports = { getAll, getById, create, update, deleteByID };