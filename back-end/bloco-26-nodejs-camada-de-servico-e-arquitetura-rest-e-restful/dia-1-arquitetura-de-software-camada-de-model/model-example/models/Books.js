const connection = require('./connection');

const getAll = async () => {
  const books = connection.execute(
    'SELECT id, title FROM books;',
  );
  return books;
};

module.exports = getAll;
