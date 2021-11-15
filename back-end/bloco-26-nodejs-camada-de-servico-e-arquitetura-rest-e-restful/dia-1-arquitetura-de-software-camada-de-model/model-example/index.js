const express = require('express');
const Author = require('./models/Author');
const app = express();
const PORT = 3000;

app.get('/authors', async (_req, res) => {
  try {
    const authors = await Author.getAll();
    res.status(200).json(authors);
  } catch(e){
    console.log(e);
  }
});

app.get('./books', async (_req, res)  => {
  try {
    const books = await Books.getAll();
    res.status(200).json(books);
  } catch {
    console.log(e);
  };
});

app.listen(PORT, () => console.log(`Ouvindo na portaorta ${PORT}`));
