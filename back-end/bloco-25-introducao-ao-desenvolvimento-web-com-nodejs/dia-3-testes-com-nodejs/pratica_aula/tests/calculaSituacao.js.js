const { expect } = require('chai');
const calculaSituacao = require('../calculaSituacao');

describe("testa resposta de calculaSituacao", () => {
  it("retorna 'reprovado'", () => {
    const resposta = calculaSituacao(3);
    expect(resposta).to.be.equals("reprovado");
  });

  it("retorna 'aprovado", () => {
    const resposta = calculaSituacao(8);
    expect(resposta).to.be.equals("aprovado");
  });

  it("retorna 'aprovado", () => {
    const resposta = calculaSituacao(7);
    expect(resposta).to.be.equals("aprovado");
  });
});
