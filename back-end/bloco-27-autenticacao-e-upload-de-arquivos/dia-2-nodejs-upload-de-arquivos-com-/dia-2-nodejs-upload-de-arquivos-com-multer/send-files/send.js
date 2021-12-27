const formData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createReadStream('./meu-arquivo.txt');

const form = new formData();
form.append('envio', stream);

const formHeaders = form.getHeaders();

const sendFile = async () => {
  try {
    const response = await axios
    .post('http://localhost:3000/envios', form, {
      headers: {
        ...formHeaders
      },
    });
    return console.log(response.status);
  } catch(error) {
    console.log(error)
  }
}

sendFile();
