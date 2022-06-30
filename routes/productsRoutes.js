const express = require('express');
const controller = require('../controllers/productsController');

const productsRoutes = express.Router();

productsRoutes.get('/', controller.getAll);
productsRoutes.get('/:id', controller.getById);
productsRoutes.post('/', controller.create);

module.exports = productsRoutes;