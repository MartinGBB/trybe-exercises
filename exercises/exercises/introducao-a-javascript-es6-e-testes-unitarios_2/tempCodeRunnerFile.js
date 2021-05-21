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

  //Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const turnoM = (obj, key, value) => {
    obj[key] = value;
  }
  turnoM(lesson2, "turno", "manhã");

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const chaves = (obj) => Object.keys(obj);
console.log(chaves(lesson1));

//Crie uma função para mostrar o tamanho de um objeto.

const tamanho1 = (obj) => Object.keys(obj).length;
console.log(tamanho1(lesson3));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const value = (obj) => Object.values(obj).length;
console.log(value(lesson3))