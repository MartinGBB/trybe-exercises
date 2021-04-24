//5)Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let maior = 0;
let max = 0;

for(let maior of numbers){
    if (max < maior){
        max = maior;
    }
};
console.log(max);