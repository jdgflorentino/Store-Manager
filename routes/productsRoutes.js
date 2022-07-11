const express = require('express');
const controller = require('../controllers/productsController');
const { nameValidation } = require('../middlewares/productsValidations');

const productsRoutes = express.Router();

productsRoutes.get('/', controller.getAll);
productsRoutes.get('/:id', controller.getById);
productsRoutes.post('/', nameValidation, controller.create);
productsRoutes.put('/:id', nameValidation, controller.update);

module.exports = productsRoutes;