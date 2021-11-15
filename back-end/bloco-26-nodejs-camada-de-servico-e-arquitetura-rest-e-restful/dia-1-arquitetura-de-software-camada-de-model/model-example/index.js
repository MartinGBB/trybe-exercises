const express = require('express');
const Author = require('./models/Author');
const Books = require('./models/Books');
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

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const authorId = await Author.findById(id);

    if (!authorId) return res.status(404).json({ message: 'Not Found'});

    res.status(200).json(authorId);
  } catch(e){
    console.log(e);
  }
});


app.get('/books', async (_req, res)  => {
  try {
    const books = await Books.getAll();
    res.status(200).json(books);
  } catch {
    console.log(e);
  };
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const bookId = await Books.findById(id);

    if (!bookId) return res.status(404).json({ message: 'Not Found'});

    res.status(200).json(bookId);
  } catch(e){
    console.log(e);
  }
});

app.listen(PORT, () => console.log(`Ouvindo na portaorta ${PORT}`));
