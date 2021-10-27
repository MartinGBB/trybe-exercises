const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `name: ${name}` })
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age <= 17) return res.status(401).json({ message: "Unauthorized" });
  res.status(200).json({ message: `Hello, ${name}`})
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(201).json({ message: `Seu nome é ${name}, e você tem ${age} anos de idade` })
});

app.listen('3001', () => console.log('App ouvindo na porta 3001'));
