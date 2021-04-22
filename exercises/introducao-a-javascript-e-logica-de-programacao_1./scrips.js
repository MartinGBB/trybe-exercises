let a = 5;
let b = 10;
let comp1 = 15;
let comp2 = 20;

let num1 = 18;
let num2 = 2;
let num3 = 25;

let soma = 1+1;

//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//Soma
console.log('Adicao');
console.log(a+b);

//Resta
console.log('Subtração');
console.log(a-b);

//Multiplicação
console.log('Multiplicação');
console.log(a*b);

//Divisão
console.log('Divisão');
console.log(a/b);

//Módulo
console.log('Módulo');
console.log(a%b);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

console.log("Numero maior en duas variaveis:");
if (comp1>comp2){
    console.log(comp1);
}else{
console.log(comp2);
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

console.log("Numero maior com três variaveis:");

if (num1>num2 && num1>num3){
    console.log("o numero maior é ",num1);
}else if (num2>num1 && num2>num3){
    console.log("o numero maior é ",num2);
}else{
    console.log("o numero maior é ",num3);
}

//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

console.log('positivo ou negativo?')
if(soma==2){
    console.log('negativo');
}else{
    console.log(0);
}