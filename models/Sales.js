const connection = require('./connection');

const newSale = async ({ productId, quantity }, insertId) => {
  const saleQuery = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
  VALUES(?, ?, ?)`;
  const productQuery = `UPDATE StoreManager.products 
  SET quantity = quantity - ?
  WHERE id = ?`;
  await connection.execute(saleQuery, [insertId, productId, quantity]);
  await connection.execute(productQuery, [quantity, productId]);
  return [{ productId, quantity }];
};

const create = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );
  return insertId;
};

module.exports = { create, newSale };
