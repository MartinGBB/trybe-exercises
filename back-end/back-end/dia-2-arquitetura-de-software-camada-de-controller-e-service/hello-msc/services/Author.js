const Author = require('../models/Author');

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

const isValid = (firstName, _middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  return true;
};

const getAll = async () => {
  const author = await Author.getAll();
  return author.map(newAuthor);
};

const findById = async (id) => {
  const authorId = await Author.findById(id);
  return authorId.map(newAuthor);
};

const create = async (firstName, middleName, lastName) => {
  const authorValid = isValid(firstName, middleName, lastName);
  if(!authorValid) return false;
  await Author.create(firstName, middleName, lastName);
  return true;
};

module.exports = {
  getAll,
  findById,
  create,
};
