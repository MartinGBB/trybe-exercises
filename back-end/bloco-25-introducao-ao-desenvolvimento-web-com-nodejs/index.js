const express = require('express');
const bodyParser = require('body-parser');
const register = require('./routes/register');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.use('/user', register);

app.listen(PORT, () => console.log(`Porta: ${PORT}`));
