const model = require('../models/Products');

const getAll = async () => {
  const products = await model.getAll();
  return products;
};

const getById = async (id) => { 
  const [product] = await model.getById(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

const create = async (newProduct) => { 
  const product = await model.create(newProduct);
  return product;
};

const update = async (newProduct) => { 
  const result = await model.update(newProduct);
  return result;
};

const deleteByID = async (id) => { 
  const result = await model.deleteByID(id);
  return result;
};

module.exports = { getAll, getById, create, update, deleteByID };