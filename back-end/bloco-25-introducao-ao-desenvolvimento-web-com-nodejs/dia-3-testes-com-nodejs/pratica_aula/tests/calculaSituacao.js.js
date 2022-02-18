const { expect } = require('chai');
const calculaSituacao = require('../calculaSituacao');

describe("testa resposta de calculaSituacao quando a media for menor que 7", () => {
  it(("retorna 'reprovado'", () => {
    const resposta = calculaSituacao(3);
    expect(resposta).to.be("reprovado");
  }));
});
