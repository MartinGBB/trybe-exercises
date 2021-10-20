const imc = (peso, altura) => {
  const calculo = Number(peso / Math.pow(altura / 100, 2)).toFixed(2);
  return console.log(`Teu imc é: ${calculo}`);
};

module.exports = imc;
