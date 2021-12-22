//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let angulo1 = 45;
let angulo2 = 45;
let angulo3 = 90;

console.log('Os angulos do triangulo são corretos? ')
if (angulo1 + angulo2 + angulo3 == 180) {
   console.log('true');
}
else if(angulo1 + angulo2 +angulo3 !=180){
   console.log('false')
}
else if(angulo1<1 , angulo2 <1, angulo3 <1){
   console.log('erro')
}