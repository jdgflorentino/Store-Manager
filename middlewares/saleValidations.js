const model = require('../models/Sales');

const salesValidation = async (req, res, next) => {
  const sales = req.body;
  if (!sales.every((sale) => sale.productId)) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (!sales.every((sale) => sale.quantity !== undefined)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (!sales.every((sale) => sale.quantity >= 1)) { 
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

const saleIdValidation = async (req, res, next) => {
  const { id } = req.params;
  const sale = await model.getById(id);
  if (sale.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  next();
};

module.exports = { salesValidation, saleIdValidation };