const factorial = (numero) => { numero == 0 ? 1 : numero > 0 ? numero * factorial(numero - 1);

}

console.log(factorial(4));