//6)Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
let resultadoimpar = 0;

for(var index = 0; index < numbers.length; index +=1){
    if(numbers[index] % 2 !== 0){
    impar += 1;
}
    }
    if (impar > 1){
        resultadoimpar +=impar;
        console.log(`temos ${resultadoimpar} impares no nosso array`);
    }else{
        console.log("nenhum valor ímpar encontrado")
    }