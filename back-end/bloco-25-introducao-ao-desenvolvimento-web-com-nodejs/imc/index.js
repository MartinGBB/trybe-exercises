const readline = require('readline-sync');
const calculoImc = require('./imc');

const peso = readline.questionFloat(`Qual seu peso? \n`);
const altura = readline.questionFloat("Qual sua altura? \n");

const imc = calculoImc(peso, altura);

console.log(`Teu imc es: ${imc}`);
