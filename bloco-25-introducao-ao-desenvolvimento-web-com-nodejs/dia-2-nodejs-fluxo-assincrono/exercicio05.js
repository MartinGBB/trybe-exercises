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

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const alteraPersonages = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8')
  .then((result) => JSON.parse(result));
  const editData = data.filter((simpson) => simpson.id != 10 && simpson.id != 6);
  console.log(editData);
}
  alteraPersonages();

  // Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

  const family = async () => {
    const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((result) => JSON.parse(result));
    const simpsonsFamily = simpsons.filter((simpson) => ["1", "2", "3", "4"].includes(simpson.id));
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  };
   family()

  // Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

  const adicionaPersonagem = async () => {
    try {
      const data = await fs.readFile('./simpsonsFamily.json', 'utf-8')
      .then((result) => JSON.parse(result));
      data.push({ "id": "8", "name": "Nelson Muntz" });
      await fs.writeFile('./simpsonsFamily.json', JSON.stringify(data));
    } catch(err) {
      console.log(err)
    };
  };
  adicionaPersonagem();
