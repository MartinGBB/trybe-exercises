const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
.then((resolve) => {
  return JSON.parse(resolve);
})
.then((readData) => readData.map(({ id, name }) => console.log(`${id} - ${name}`)));
