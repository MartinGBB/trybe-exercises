const readline = require('readline-sync');

const sorteio = () => {
  const input = readline.questionInt("Digite seu numero da sorte: ")
  return console.log(`Seu numero da sorte: ${input}`)
};
sorteio();

module.export = sorteio;