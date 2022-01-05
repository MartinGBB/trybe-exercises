const { Book } = require('../../models');

module.exports = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
};
