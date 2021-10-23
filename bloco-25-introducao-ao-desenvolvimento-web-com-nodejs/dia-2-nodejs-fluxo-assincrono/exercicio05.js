const fs = require('fs').promises;

const functionData = async () => {
  try {
    const result = await fs.readFile('./simpsons.json', 'utf-8')
    return console.log(JSON.parse(result));
  } catch (err) {
    console.log(`erro: ${err.message}`);
  };
};

functionData();