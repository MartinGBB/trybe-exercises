const readline = require('readline-sync');

const sorteio = () => {
  const input = readline.questionInt("Digite seu numero da sorte: ")
  const numeroGanador = parseInt(Math.random() * 10);
  const start = input === numeroGanador ? "\n Parabéns, número correto!" : `\n Opa, não foi dessa vez. O número era [${numeroGanador}]`
  console.log(start);
  return jogoNovo(); 
};

const jogoNovo = () => {
  const restart = readline.question(`\n quer jogar de novo? (s/n): `)
  if (restart === "s") return sorteio();
  return console.log("\n Até mais ≧◠‿●‿◠≦ \n");  
}
sorteio();

module.export = sorteio;