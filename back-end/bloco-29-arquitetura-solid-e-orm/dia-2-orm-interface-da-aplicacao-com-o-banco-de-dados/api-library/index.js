const express = require('express');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT

app.use(express.json());

app.get('/', (req, res) => {
  res.send('funcionando');
});

app.listen(PORT, () => console.log(`Porta ${PORT}`));
