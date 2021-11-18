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

const findById = async (id) => {
  return await connection()
  .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray());
};

const isValid = async (title, authorId) => {
  const MIN_LENGTH_TITLE = 3;
  if (!title || typeof title !== 'string' || title.length < MIN_LENGTH_TITLE) return false;
  if (!authorId || typeof authorId !== 'string' || authorId.length !== 24) return false;
  return true;
};

const create = async (id, title, authorId) => connection()
.then((db) => db.collection('books').insertOne({ id, title, authorId }));

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};