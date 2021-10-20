const magreza = (calculo) => ` Teu IMC é: ${calculo} \n Situação: Abaixo do peso (magreza)`;
const peso_normal = (calculo) => ` Teu IMC é: ${calculo} \n Situação: Peso normal`;
const sobrepeso = (calculo) => ` Teu IMC é: ${calculo} \n Situação: Acima do peso (sobrepeso)`;
const obesidadeI = (calculo) => ` Teu IMC é: ${calculo} \n Situação: Obesidade grau I`;
const obesidadeII = (calculo) => ` Teu IMC é: ${calculo} \n Situação: Obesidade grau II`;
const obesidadeIII = (calculo) => ` Teu IMC é: ${calculo} \n Situação: Obesidade graus III e IV`;


const imc = (peso, altura) => {
  const calculo = Number(peso / Math.pow(altura / 100, 2)).toFixed(2);
  if(calculo < 18.5) return console.log(magreza(calculo));
  if(calculo > 18.5 && calculo < 24.9) return console.log(peso_normal(calculo));
  if(calculo > 25,0 && calculo < 29,9) return console.log(sobrepeso(calculo));
  if(calculo > 30,0 && calculo < 34,9) return console.log(obesidadeI(calculo));
  if(calculo > 35,0 && calculo < 39,9) return console.log(obesidadeII(calculo));
  return console.log(obesidadeIII(calculo));
};

module.exports = imc;
