
const peso = 67;
const altura = 171;

const imc = (peso, altura) => {
  const calculo = Number(peso / Math.pow(altura / 100, 2)).toFixed(2);
  return console.log(`imc: ${calculo}`);
}
imc(peso, altura);