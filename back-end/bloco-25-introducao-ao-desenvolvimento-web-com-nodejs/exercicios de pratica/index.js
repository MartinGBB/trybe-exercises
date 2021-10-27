const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.listen('3001', () => console.log('App ouvindo na porta 3001'));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `name: ${name}` })
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age <= 17) return res.status(401).json({ message: "Unauthorized" });
  res.status(200).json({ message: `Hello, ${name}`})
});
