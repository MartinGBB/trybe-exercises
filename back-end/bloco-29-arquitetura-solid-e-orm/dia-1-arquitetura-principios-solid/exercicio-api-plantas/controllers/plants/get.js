module.exports = (req, res) => {
  try {
    res.status(200).send({ id: id })
  } catch (err) {
    console.log(err);
  };
};
