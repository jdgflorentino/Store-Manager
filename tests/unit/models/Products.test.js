const sinon = require('sinon');
const { expect } = require('chai');

const model = require("../../../models/Products");

const connection = require("../../../models/connection");

describe('Models/Products', () => { 
  before(async() => { 
    await sinon.stub(connection, 'execute').resolves([{ id: 1, name: 'Martelo do Thor' }]);
  });
  after(async() => {
    await connection.execute.restore();
  });
  describe('getAll', () => { 
    it('should be a function', () => {
      expect(model.getAll).to.be.a('function');
    });
    it('should return an object', async () => {
      const products = await model.getAll();
      expect(products).to.be.an('object');
    });
  });
  describe('getById', () => { 
    it('should be a function', () => {
      expect(model.getById).to.be.a('function');
    });
    it('should return an object with id 1', async () => {
      const product = await model.getById(1);
      expect(product).to.be.a('object');
    });

    });
});