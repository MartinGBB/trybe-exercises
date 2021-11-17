const connection = require('./connection');
const { ObjectId } = require('mongodb');
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

const findById =  (id) => {
  return connection()
  .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray());
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