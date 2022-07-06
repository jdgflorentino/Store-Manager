const connection = require('./connection');

const newSale = async (insertId, sale) => {
  const { productId, quantity } = sale;
  const saleQuery = `INSERT INTO StoreManager.sales_products
    (sale_id, product_id, quantity) VALUES(?, ?, ?); `;
  await connection.execute(saleQuery, [insertId, productId, quantity]);
};

const create = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
  );
  return insertId;
};

module.exports = { create, newSale };
