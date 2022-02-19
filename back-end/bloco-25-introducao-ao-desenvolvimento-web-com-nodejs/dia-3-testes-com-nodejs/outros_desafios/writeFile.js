const fs = require('fs');

const writeFile = (nomeDoArquivo, conteudo) => {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudo);
  return 'ok';
};

module.exports = writeFile;
