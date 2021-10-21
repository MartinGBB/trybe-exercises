const readline = require('readline-sync');

const vMedia = () => {
  const distancia = readline.questionFloat(`Insira a distancia: `);
  const tempo = readline.questionFloat(`Insira o tempo: `);
  const media = (distancia / tempo).toFixed(2);
  return console.log(`A velocidade media é: ${media} m/s`);
};
vMedia();

module.exports = vMedia;
