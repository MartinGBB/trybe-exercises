const connection = require('./connection');



const serialize = (autorData) => {
  return {
    id: autorData.id,
    firstName: autorData.first_name,
    middleName: autorData.middle_name,
    lastName: autorData.last_ame
  }
}

const getAll = async () => {
  const [author] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  return author.map(serialize);
}

module.exports = {
  getAll,
}