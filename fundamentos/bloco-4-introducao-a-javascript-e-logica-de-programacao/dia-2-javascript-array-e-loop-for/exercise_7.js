//7)Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 1000;

for(let number of numbers){
    if(menor > number){
        menor = number;
    }
}
console.log(`o numero menor é ${menor}.`);