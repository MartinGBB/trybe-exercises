const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const writeFile = require('../writeFile');
const CONTEUDO_DO_ARQUIVO = "conteudo";

describe("testa writeFile", () => {
  describe("A resposta", () => {
    it("È uma string", () => {
      const response = writeFile("arquivo.txt", CONTEUDO_DO_ARQUIVO);
      expect(response).to.be.a('string');
    });
  
    it("Retorna ok", () => {
      const response = writeFile("arquivo.txt", CONTEUDO_DO_ARQUIVO);
      expect(response).to.be.equals('ok');
    });
  });
});
