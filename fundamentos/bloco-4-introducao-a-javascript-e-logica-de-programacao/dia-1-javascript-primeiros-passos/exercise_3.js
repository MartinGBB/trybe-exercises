//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let num1 = 18;
let num2 = 2;
let num3 = 25;

console.log("Numero maior com três variaveis:");

if (num1>num2 && num1>num3){
    console.log("o numero maior é ",num1);
}else if (num2>num1 && num2>num3){
    console.log("o numero maior é ",num2);
}else{
    console.log("o numero maior é ",num3);
}
