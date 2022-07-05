const connection = require('./connection');

const newSale = async (insertId, { productId, quantity }) => {
  const saleQuery = 'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)'
    + 'VALUES(?, ?, ?);';
  await connection.execute(saleQuery, [insertId, productId, quantity]);
};

const create = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (CURRENT_TIMESTAMP());',
  );
  return insertId;
};

module.exports = { create, newSale };
