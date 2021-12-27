const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]

const verificaId = (req, res, next) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === parseInt(id, 0));
  if (!post || post === '') return res.status(404).json({ message: 'post not found' });
  res.status(200).json(post);
  next();
};

module.exports = verificaId;
