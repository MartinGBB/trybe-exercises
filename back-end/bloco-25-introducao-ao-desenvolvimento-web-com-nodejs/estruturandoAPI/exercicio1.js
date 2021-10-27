//Crie uma array drinks com os seguintes obejtos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.
// const drinks = [
//   { id: 1, name: 'Refrigerante Lata', price: 5.0 },
//   { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
//   { id: 3, name: 'Suco 300ml', price: 4.0 },
//   { id: 4, name: 'Suco 1l', price: 10.0 },
//   { id: 5, name: 'Cerveja Lata', price: 4.5 },
//   { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
// ];

const express = require('express');
const app = express();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (_req, res) => {
  const result = drinks.sort((a, b) => a.name < b.name ? -1 : a.name > b.name);
  res.json(result);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((b) => b.id === parseInt(id));
  if(!drink) return res.status(404).json({ message: 'Recipe not found!' });
  res.status(200).json(drink);
});

app.get('.drinks/search', (req, res) => {
  const { name, minPrice } = req.query;
  const filterDrink = drinks.filter((d) => d.name.includes(name) && d.price >= parseInt(minPrice));
  res.status(200).send(filterDrink);
})

app.listen(3002, () => console.log('app drinks na porta 3002'));
