const connection = require('./connection');

const getAll = async () => { 
  const [sales] = await connection.execute(
    `SELECT sale_prod.sale_id as saleId, sale.date, 
    sale_prod.product_id as productId, sale_prod.quantity
    FROM StoreManager.sales sale
    INNER JOIN StoreManager.sales_products sale_prod
    ON sale.id = sale_prod.sale_id;
    ORDER BY sale_prod.sale_id, sale_prod.product_id;`,
  );
  return sales;
};

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

module.exports = { create, newSale, getAll };
