const model = require('../models/Products');

const nameValidation = (req, res, next) => { 
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res
      .status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

const productIdValidation = async (req, res, next) => {
  const sales = req.body;
  const product = await Promise.all(sales.map(({ productId }) => model.getById(productId)));
  if (product.some((p) => p.length === 0)) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  nameValidation,
  productIdValidation,
};