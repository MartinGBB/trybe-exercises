const axios = require('axios');

const requisicao = async () => {
  try {
    const response = await axios.get('http://localhost:3000/ping/')
    const { data, status } = response;
    return console.log(data, `status: ${status}`);
  } catch(error) {console.log(error)};

}

requisicao()
