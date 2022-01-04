module.exports = (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ id: id })
  } catch (err) {
    console.log(err);
  };
};
