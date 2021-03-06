const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');
const leArquivo = require('../leArquivo');

const CONTEUDO_DO_ARQUIVO = 'arquivo para ler';

describe('Testa função "leArquivo"', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
    });

    after(() => {
      fs.readFileSync.restore();
    });
  
    describe('A resposta', () => {
      
      it('É uma string', () => {
        const resposta = leArquivo('arquivo.txt');
        expect(resposta).to.be.a('string');
      });

      it('O arquivo é igual ao conteúdo do arquivo', () => {
        const resposta = leArquivo('arquivo.txt');
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('A resposta', () => {
      const resposta = leArquivo('arquivoNo.txt');
      it('É "null"', () => {
        expect(resposta).to.be.a('null');
      });
    });
  });
});
