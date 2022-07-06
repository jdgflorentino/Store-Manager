const model = require('../models/Sales');

const getById = async (id) => { 
  const sale = await model.getById(id);
  return sale;
};

const getAll = async () => { 
  const sales = await model.getAll();
  return sales;
};

const create = async (newSales) => { 
  const insertId = await model.create();
  await Promise.all(newSales.map(async (sale) => model.newSale(insertId, sale)));
  return insertId;
};

module.exports = { create, getAll, getById };