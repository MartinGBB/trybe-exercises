const readline = require('readline-sync');
const calculoImc = require('./imc');

const peso = readline.questionFloat(`Qual seu peso? \n`);
const altura = readline.questionFloat("Qual sua altura? \n");

calculoImc(peso, altura);
