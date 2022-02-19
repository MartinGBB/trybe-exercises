const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]

const allPosts = (_req, res) => {
  if(!posts || posts === '') return res.status(200).json([]);
  res.status(200).json(posts);
};

module.exports = allPosts;
