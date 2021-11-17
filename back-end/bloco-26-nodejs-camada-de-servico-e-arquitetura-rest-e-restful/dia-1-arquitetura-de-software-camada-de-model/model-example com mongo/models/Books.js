const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  return  await connection()
    .then((db) => db.collection('books').find({}).toArray())
    .then((books) => books.map(({ _id, title, author_id }) => (
      {
        id: _id,
        title,
        authorId: author_id,
      }
    )));
};

const findById = async (author_id) => {
  const query = 'SELECT * FROM books WHERE author_id = ?;';
  const [book] = await connection.execute(query, [author_id]);

  return book.map(({
    id,
    title,
    author_id
  }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const isValid = async (title, authorId) => {
  const MIN_LENGTH_TITLE = 3;
  if (!title || typeof title !== 'string' || title.length < MIN_LENGTH_TITLE) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;
  return true;
};

const create = async (title, authorId) => {
  const query = 'INSERT INTO books (title, authorId) VALUES (?, ?)';
  const books = await connection.execute(query, [title, authorId]);
  return books;
};

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};