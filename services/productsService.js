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

module.exports = { getAll, getById };