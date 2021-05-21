// Crie uma função que receba um número e retorne seu fatorial.
	const factorial = (numero) => {
    let num = 1;
    if (numero > 0) {
        for (let index = 1; index <= numero; index += 1) {
            num = num * index;
        }
        console.log(num);
    }
	}
	console.log(factorial(4));

//Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factorial = (numero) => {
	if (numero == 0) {
		return 1;
	}
	else if (numero > 0) {
	return numero * factorial(numero - 1);
	}
}

console.log(factorial(4));