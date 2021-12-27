const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM books;',
  );
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const findById = async (author_id) => {
  const query = 'SELECT * FROM books WHERE author_id = ?;';
  const [book] = await connection.execute(query, [author_id]);

  return book.map(({ id, title, author_id }) => ({ 
    id,
    title,
    authorId: author_id,
  }));
};

module.exports = { getAll, findById };
