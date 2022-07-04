const model = require('../models/Sales');

const create = async (newSales) => { 
  const insertId = await model.create(newSales);
  return insertId;
};

module.exports = { create };