let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
//2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
for(let index1 = 0; index1 < numbers.length; index1 += 1) {
    soma = numbers[index1] + soma;
    //console.log(numbers[index1]);

};
console.log(soma);