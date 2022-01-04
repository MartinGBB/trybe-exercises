const plants = require('../../plants');

module.exports = (req, res) => {
  try {
    const { id } = req.params;
    const result = plants.removePlantById(id);
    res.send(result);
  } catch (err) {
    console.log(err);
  };
};
