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