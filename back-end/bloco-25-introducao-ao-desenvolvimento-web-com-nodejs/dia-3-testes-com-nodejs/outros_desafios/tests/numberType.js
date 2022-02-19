const { expect } = require('chai');

const numberType = require('../numberType');

describe("testa função numberType", () => {
  describe("Recebe um numero", () => {
    it("Deve retornar uma string", () => {
      const response = numberType(5);
      expect(response).to.be.a('string');
    });
  });

  describe("recebe numero positivo maior que zero", () => {
    it("Deve retornar 'positivo'", () => {

    });
  });

  describe("recebe numero negativo", () => {
    it("Deve retornar 'negativo'", () => {

    });
  });

  describe("recebe numero neutro", () => {
    it("Deve retornar 'neutro'", () => {

    });
  });
});
