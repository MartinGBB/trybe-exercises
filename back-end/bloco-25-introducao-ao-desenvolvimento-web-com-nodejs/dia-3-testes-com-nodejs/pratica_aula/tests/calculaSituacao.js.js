const { expect } = require('chai');
const calculaSituacao = require('../calculaSituacao');

describe("testa resposta de calculaSituacao quando a media for menor que 7", () => {
  it(("retorna 'reprovado'", () => {
    expect(calculaSituacao(3)).to.be("reprovado");
  }));
});
