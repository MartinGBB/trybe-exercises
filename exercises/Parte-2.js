//Crie uma função que receba um número e retorne seu fatorial.
const factorial = (numero) => {
    let contador = 0;
    let mult = 1;
    
        if (numero === 1 || numero === 0) {
        return 1;
        }
        else if (numero >= 2) {
            for (let index = 0; index < numero; index += 1) {
            contador += 1;
            mult *= contador 
            }
            return mult;
        }
        return 'error';
    }
    console.log(factorial(4));

//tente fazer o mesmo exercício de forma recursiva.
    const factorial2 = (num) =>  num > 1 ? num * factorial2(num - 1) : 1 
    console.log(factorial2(4));