const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
const rescue = require('express-rescue');
const simpsonsFunctions = require('./fs_simpsons');

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

app.get('/simpsons', rescue(async (_req, res) => {
  const simpsons = await simpsonsFunctions.getSimpsons();
  if (!simpsons) return res.status(500);
  res.status(200).json(simpsons);
}));

app.get('/simpsons/:id', rescue( async (req, res) => {
  const { id } = req.params;
  const simpsons = await simpsonsFunctions.getSimpsons();
  const filterSimpsons = simpsons.find((s) => s.id === id);
  if (!filterSimpsons) return res.status(404).json({ message: 'simpson not found' });
  return res.status(202).json(filterSimpsons);
}));

app.post('/simpsons', rescue( async (req, res) => {
  const { id, name } = req.body;
  const simpsonsGet = await simpsonsFunctions.getSimpsons();
  const simpsonMap = simpsonsGet.map((s) => s.id).includes(id);
  
  if (simpsonMap) return res.status(409).json({ message: 'id already exists' });
  simpsonsGet.push({ id, name });
  await simpsonsFunctions.setSimpsons(simpsonsGet);
  res.status(204).end();
}));

app.listen('3003', () => console.log('App ouvindo na porta 3003'));
