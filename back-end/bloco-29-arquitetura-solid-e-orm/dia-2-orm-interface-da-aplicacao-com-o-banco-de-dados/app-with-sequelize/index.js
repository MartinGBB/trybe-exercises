const express = require('express');
const bodyParser = require("body-parser");

const userController = require('./contollers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/user', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));