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

const findById = async (id) => {
  const query = 
  'SELECT id, first_name, middle_name, last_name FROM authors WHERE id = ?;';
  const [authorId] = await connection.execute(query, [id]);

  if (authorId.length === 0) return null;

  const { firstName, middleName, lastName, fullName } = authorId.map(serialize)[0];
  return newAuthor({
    
    firstName,
    middleName,
    lastName,
    fullName,
  });
};

const isValid = (firstName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  return true;
};

const create = async (firstName, middleName, lastName) => {
  const query = 'INSERT INTO authors (firstName, middleName, lastName) VALUES(?, ?, ?)';
  const authors = await connection.execute(query, [firstName, middleName, lastName]);
  return authors;
}

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
