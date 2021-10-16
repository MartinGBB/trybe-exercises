const numSorteio = Math.round((Math.random() * 5) + 1);

//const winter = (numSorteio, myNum) => numSorteio === myNum;

const sorteio = (numSorteio, myNum) => 
(numSorteio === myNum) ? `O numero do sorteio é: ${numSorteio}
Felicidades, ganaste!!!` : `O numero do sorteio é: ${numSorteio}
Perdiste, intentalo de nuevo :(`;

console.log(sorteio(numSorteio, 5));
