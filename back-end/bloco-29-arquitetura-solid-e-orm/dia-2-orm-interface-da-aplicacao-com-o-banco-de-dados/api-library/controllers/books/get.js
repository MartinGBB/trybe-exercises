const { Book } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });
    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
};
