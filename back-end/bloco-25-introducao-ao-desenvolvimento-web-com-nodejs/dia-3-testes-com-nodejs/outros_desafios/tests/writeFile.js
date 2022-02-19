const { expect } = require('chai');

const writeFile = require('../writeFile');
const CONTEUDO_DO_ARQUIVO = "conteudo";

describe("testa writeFile", () => {
  describe("A resposta", () => {
    it("È uma string", () => {
      writeFile("arquivo.txt", CONTEUDO_DO_ARQUIVO);
      expect(writeFile).to.be.a('string');
    });
  
    it("Retorna ok", () => {
      writeFile("arquivo.txt", CONTEUDO_DO_ARQUIVO);
      expect(writeFile).to.be.equals('ok');
    });
  });
});
