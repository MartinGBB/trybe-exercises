const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
.then((resolve) => {
  return JSON.parse(resolve);
})
.then((readData) => readData.map(({ id, name }) => console.log(`${id} - ${name}`)));

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

const dadosPersonagem = async (id) => {
  const resolve = await fs.readFile('./simpsons.json', 'utf-8')
  .then((result) => JSON.parse(result));
  const simpsons = resolve.find((simpson) => simpson.id === id);
  if(!simpsons) {
    throw new Error('id não encontrado');
  };
  return console.log(simpsons);
};
dadosPersonagem('5');
