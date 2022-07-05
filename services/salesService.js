const model = require('../models/Sales');

const create = async (newSales) => { 
  const insertId = await model.create();

  const newSale = newSales.map((sale) =>
    model.newSale(sale, insertId));
  await Promise.all(newSale);
  return [{ insertId, itemsSold: newSales }];
};

module.exports = { create };