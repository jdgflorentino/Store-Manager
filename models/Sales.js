const connection = require('./connection');

const newSale = async ({ productId, quantity }, insertId) => { 
  const sale = connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [insertId, productId, quantity],
  );
  const product = connection.execute(
    'UPDATE StoreManager.products SET quantity = quantity - ? WHERE id = ?',
    [quantity, productId],
  );
  await Promise.all([sale, product]);
};

const create = async (newSales) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)',
  );

  await Promise.all(newSales.map(async (sale) => {
    newSale(sale, insertId);
  }));
  return insertId;
};

module.exports = { create };