const connection = require('./connection');

const getById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales AS sale
    INNER JOIN StoreManager.sales_products AS sp
    ON sale.id = sp.sale_id
    WHERE sale.id = ?
    ORDER BY sp.product_id ASC;`,
    [id],
  );
  return sale;
};

const getAll = async () => { 
  const [sales] = await connection.execute(
    `SELECT sp.sale_id as saleId, date, 
    sp.product_id as productId, sp.quantity
    FROM StoreManager.sales AS sale
    INNER JOIN StoreManager.sales_products AS sp
    ON sale.id = sp.sale_id
    ORDER BY sp.sale_id ASC`,
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

module.exports = { create, newSale, getAll, getById };
