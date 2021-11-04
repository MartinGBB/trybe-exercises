const express = require('express');
const bodyParser = require('body-parser');
const register = require('./routes/users');
const price = require('./routes/btc');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.use('/user', register);
app.use('/btc', price);

app.listen(PORT, () => console.log(`Porta: ${PORT}`));
