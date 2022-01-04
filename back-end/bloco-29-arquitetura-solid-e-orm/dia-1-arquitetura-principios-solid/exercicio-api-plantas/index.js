const express = require('express');
const root = require('./controllers/root');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use('/', root);

app.listen(PORT, () => console.log(`Usando porta ${PORT}`));
