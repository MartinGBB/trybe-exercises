const connection = require('./connection');
const { ObjectId } = require('mongodb');

const newAuthor = (authorData) => {
  const { id, firstName, lastName, middleName } = authorData;
  const name = [firstName, middleName, lastName].filter((name) => name).join(' ');
  return {
    id,
    firstName,
    lastName,
    middleName,
    fullName: name,
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  };
};

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

const isValid = (firstName, _middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  return true;
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
