const express = require('express');
const salesController = require('../controllers/salesController');
const { salesValidation, saleIdValidation } = require('../middlewares/saleValidations');
const { productIdValidation } = require('../middlewares/productsValidations');

const salesRoutes = express.Router();

salesRoutes.get('/', salesController.getAll);
salesRoutes.get('/:id', saleIdValidation, salesController.getById);
salesRoutes.post('/',
  salesValidation,
  productIdValidation, salesController.create);

module.exports = salesRoutes;