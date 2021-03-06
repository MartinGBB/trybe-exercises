//Crie uma função que receba um número e retorne seu fatorial.
const factorial = (numero) => {
    let contador = 0;
    let mult = 1;

    if (numero === 1 || numero === 0) {
        return 1;
    } else if (numero >= 2) {
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
const factorial2 = (num) => num > 1 ? num * factorial2(num - 1) : 1
console.log(factorial2(4));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (palavra) => {
    let frase = palavra.split(' ');
    let tamanhoPalavra = 0;
    let palavraMaior = '';

    for (const test of frase) {

        if (test.length > tamanhoPalavra) {
            tamanhoPalavra = test.length;
            palavraMaior = test;
        }
    }
    return palavraMaior;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'    

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

const myPhrase = (palavra) => {
    const originalPhrase = "Tryber x aqui!";
    const newPhrase = originalPhrase.replace('x', palavra);
    return newPhrase;
}

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills.

const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'Redux'];

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
//Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:

const message = (saudo, info) => {
    const sendMessage = `${saudo} Minhas cinco principais habilidades são: ${info}.`;
    return sendMessage;
}

console.log(message(myPhrase('Bebeto'), skills));