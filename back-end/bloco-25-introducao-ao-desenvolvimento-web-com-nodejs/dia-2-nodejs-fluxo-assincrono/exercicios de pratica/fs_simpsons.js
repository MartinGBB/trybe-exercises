const fs = require('fs/promises');

const getSimpsons = () => {
 return fs.readFile('./simpsons.json', 'utf-8')
  .then((response) => JSON.parse(response));
};

const setSimpsons = (simpsons) => {
  return fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
};

module.exports = { getSimpsons, setSimpsons };
