const connection = require('./connection');

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
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors;',
  );
  return authors.map(serialize).map(newAuthor);
};

module.exports = {
  getAll,
};
