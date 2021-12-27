const readline = require('readline-sync');

const scripts = [
  { name: "Calcular IMC", script: "./imc.js" },
  { name: "Calcular velocidade média", script: "./velocidade" },
  { name: "Jogo de sorteio", script: "./sorteio" }
];
 const menu = scripts.map(({ name }, index) => `\n${index + 1} - ${name}\n`);
 menu.unshift('Escolha um número para executar o script correspondente \n');

  // menu = menu.split('\n');

  const selectInput = readline.questionInt(menu) -1;
  const script = scripts[selectInput];

  if (!script) return console.log("Número invalido");

require(script.script);