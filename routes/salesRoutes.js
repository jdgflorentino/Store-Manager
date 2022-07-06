const express = require('express');
const salesController = require('../controllers/salesController');
const { salesValidation } = require('../middlewares/saleValidations');
const { productIdValidation } = require('../middlewares/productsValidations');

const salesRoutes = express.Router();

salesRoutes.post('/',
  salesValidation,
  productIdValidation, salesController.create);

module.exports = salesRoutes;