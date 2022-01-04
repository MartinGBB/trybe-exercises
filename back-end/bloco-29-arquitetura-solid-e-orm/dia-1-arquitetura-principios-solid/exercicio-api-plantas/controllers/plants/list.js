
module.exports = (_req, res) => {
  try {
    res.status(200).json({ message: 'funcionando'});
  } catch (err) {
    console.log(err);
  };
};
