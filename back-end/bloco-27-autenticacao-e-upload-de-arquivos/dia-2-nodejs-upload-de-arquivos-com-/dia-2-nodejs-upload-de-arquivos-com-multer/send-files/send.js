const formData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const URL = 'http://localhost:3001/envios';


const main = async () => {
  const stream = fs.createReadStream('./files/file.png');

  const form = new formData();
  form.append('envio', stream);

  const formHeaders = form.getHeaders();

  await axios.post(URL, form, { headers: { ...formHeaders } });

    stream.close();
}

main();
