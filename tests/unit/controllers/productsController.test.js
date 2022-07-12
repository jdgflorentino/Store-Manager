const sinon = require('sinon');
const { expect } = require('chai');

const service = require('../../../services/productsService');
const controller = require("../../../controllers/productsController");

describe('Controllers/Products', () => { 
  const res = {};
  const req = {};
  describe('getAll', () => { 
    before( async () => { 
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns([{ id: 1, name: "Martelo do Thor" }]);
      sinon.stub(service, 'getAll').resolves([{ id: 1, name: 'Martelo do Thor' }]);
    });
    after(async () => { 
      service.getAll.restore();
    });
    it('return code 200', async () => { 
      await controller.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });
    it('return json', async () => { 
      await controller.getAll(req, res);
      expect(res.json.calledWith([{ id: 1, name: "Martelo do Thor" }])).to.equal(true);
    });
    it('return a error', async () => { 
      service.getAll.restore();
      sinon.stub(service, 'getAll').rejects();
      await controller.getAll(req, res);
      expect(res.status.calledWith(500)).to.be.true;
    });
  });

  describe('getById', () => { 
    const req = { params: { id: 1 } };
    before(async () => { 
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(service, "getById")
        .resolves({ id: 1, name: "Martelo do Thor" });
    });
    after(async () => { 
      service.getById.restore();
    });
    it('return code 200', async () => { 
      await controller.getById(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });
    it('return json', async () => { 
      await controller.getById(req, res);
      expect(res.json.calledWith({ id: 1, name: "Martelo do Thor" })).to.equal(true);
    });
        it("return a error", async () => {
          service.getById.restore();
          sinon.stub(service, "getById").rejects();
          await controller.getById(req, res);
          expect(res.status.calledWith(404)).to.be.true;
        });
  });

});