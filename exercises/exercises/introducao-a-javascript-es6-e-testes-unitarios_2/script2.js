const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   //Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

//   const turnoM = (obj, key, value) => {
//     obj[key] = value;
//   }
//   turnoM(lesson2, "turno", "manhã");

// //Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// const chaves = (obj) => Object.keys(obj);
// console.log(chaves(lesson1));

// //Crie uma função para mostrar o tamanho de um objeto.

// const tamanho1 = (obj) => Object.keys(obj).length;
// console.log(tamanho1(lesson3));

// //Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// const value = (obj) => Object.values(obj).length;
// console.log(value(lesson3));

// //Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons)

// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
// // console.log(allLessons);

// //Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

// const estTotal = (lessons) => {
// const chaves = Object.keys(lessons);
// let total = 0;
// for (let index in chaves) {
//   const TodasChaves = chaves[index];
//   total += lessons[TodasChaves].numeroEstudantes
// }
// return total;
// }
// console.log(estTotal(allLessons));

// //Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

// const getValueByNumber = (obj, cont) =>  Object.values(obj)[cont]
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifica = (objeto, nome, valor) => {
  const chave = Object.keys(objeto).includes(nome);
  const val = Object.values(objeto).includes(valor);
  const verificacao = `${chave}
${val}`;
  return verificacao;
}
console.log(verifica(lesson2, 'materia', 'História'))