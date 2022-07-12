const sinon = require("sinon");
const { expect } = require("chai");

const services = require("../../../services/productsService");
const model = require("../../../models/Products");

describe("Services/Products", () => { 
  describe("getAll", () => { 
    before(async () => { 
      await sinon.stub(model, "getAll").resolves([{ id: 1, name: "Martelo do Thor" }]);
    });
    after(async () => {
      await model.getAll.restore();
    });
    it("should return an array", async () => {
      const products = await services.getAll();
      expect(products).to.be.an("array");
    });
    it("should be a function", () => {
      expect(services.getAll).to.be.a("function");
    });
  });
  describe("getById", () => { 
        before(async () => {
          await sinon
            .stub(model, "getById")
            .resolves([{ id: 1, name: "Martelo do Thor" }]);
        });
        after(async () => {
          await model.getById.restore();
        });
    const id = 1;
    it("should be a function", () => {
      expect(services.getById).to.be.a("function");
    });
    it("should return an object", async () => {
      const product = await services.getById(id);
      expect(product).to.be.a("object");
    });
    it("should return an object with properties id and name", async () => {
      const product = await services.getById(id);
      expect(product).to.have.a.property("id");
      expect(product).to.have.a.property("name");
    });
  });
});