const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');
const leArquivo = require('../leArquivo');

const CONTEUDO_DO_ARQUIVO = 'arquivo para ler';

sinon.stub(fs, 'readFileSync')
  .returns(CONTEUDO_DO_ARQUIVO);

describe('Testa função "leArquivo"', () => {
  describe('Quando o arquivo existe', () => {
    describe('A resposta', () => {
      const resposta = leArquivo('arquivo.txt');

      it('É uma string', () => {
        expect(resposta).to.be.a('string');
      });

      it('O arquivo é igual ao conteúdo do arquivo', () => {
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    describe('A resposta', () => {
      const resposta = leArquivo('arquivo.txt');
      it('É "null', () => {
        expect(resposta).to.be.a('null');
      });
    });
  });
});
