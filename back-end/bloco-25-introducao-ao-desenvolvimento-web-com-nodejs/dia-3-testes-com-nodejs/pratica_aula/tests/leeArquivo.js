const { expect } = require('chai');
const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'arquivo para ler';

describe('Testa função "leArquivo"', () => {
  describe('Quando o arquivo existe', () => {
    describe('A resposta', () => {
      it('É uma string', () => {
        const resposta = leArquivo(CONTEUDO_DO_ARQUIVO);
        expect(resposta).to.be.a('string');
      });

      it('O arquivo é igual ao conteúdo do arquivo', () => {
    
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    describe('A resposta', () => {
      it('É "null', () => {
        
      });
    })
  });

});
