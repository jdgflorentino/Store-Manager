const model = require('../models/Sales');

const create = async (newSales) => { 
  const insertId = await model.create();
  await Promise.all(newSales.map(async (sale) => model.newSale(insertId, sale)));
  return { id: insertId };
};

module.exports = { create };