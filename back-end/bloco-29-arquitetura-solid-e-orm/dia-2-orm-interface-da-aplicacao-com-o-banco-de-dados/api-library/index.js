const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT
const root = require('./controllers/root');

app.use(express.json());
app.use('/', root);

app.listen(PORT, () => console.log(`Porta ${PORT}`));
