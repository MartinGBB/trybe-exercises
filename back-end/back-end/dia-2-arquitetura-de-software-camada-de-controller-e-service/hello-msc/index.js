const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./services/Author');
const Books = require('./models/Books');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

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

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const author = await Author.create(first_name, middle_name, last_name);
  if (!author) return res.status(400).json({ message: 'dados invalidos'});
  res.status(201).json(author)
});

app.post('/books', async (req, res) => {
  const { title, authorId } = req.body;
  if (!(await Books.isValid(title, authorId))) return res.status(400).json({ message: 'Dados inválidos' });
  await Books.create(title, authorId);
  res.status(201).json({ message: 'Livro criado com sucesso! '});
});

app.listen(PORT, () => console.log(`Ouvindo na portaorta ${PORT}`));
