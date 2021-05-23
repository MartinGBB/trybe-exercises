const factorial = (numero) => {
    let contador = 0;
    let mult = 1;
    
        if (numero === 1 || numero === 0) {
        return 1;
        }
        else if (numero >= 1) {
            for (let index = 0; index < numero; index += 1) {
            contador += 1;
            mult *= contador 
            }
            return mult;
        }
        return 'error';
    }
    console.log(factorial(4));