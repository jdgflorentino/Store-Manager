const express = require('express');
const controller = require('../controllers/productsController');
const validation = require('../middlewares/productsValidations');

const productsRoutes = express.Router();

productsRoutes.get('/', controller.getAll);
productsRoutes.get('/:id', controller.getById);
productsRoutes.post('/', validation.nameValidation, controller.create);

module.exports = productsRoutes;