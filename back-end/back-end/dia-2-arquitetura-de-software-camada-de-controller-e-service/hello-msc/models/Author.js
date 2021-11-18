const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return await connection()
    .then((db) => db.collection('authors').find().toArray())
      .then((authors) => authors.map(({ _id, firstName, middleName, lastName }) => 
        newAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      ));
};

const findById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne((ObjectId(id))));

  if (!authorData) return null;

  const { firstName, middleName, lastName, fullName } = authorData;
  return newAuthor({
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  });
};

const create = async (firstName, middleName, lastName) => {
  await connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }));
  };

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
