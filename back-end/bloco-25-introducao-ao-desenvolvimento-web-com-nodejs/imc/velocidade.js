const readline = require('readline-sync');

const vMedia = () => {
  const distancia = readline.questionInt(`Insira a distancia(m): `);
  const tempo = readline.questionInt(`Insira o tempo(s): `);
  const media = (distancia / tempo).toFixed(2);
  return console.log(`A velocidade media é: ${media} m/s`);
};
vMedia();

module.exports = vMedia;
