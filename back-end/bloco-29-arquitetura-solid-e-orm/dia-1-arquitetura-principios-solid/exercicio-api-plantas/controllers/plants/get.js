const plants = require('../../plants');

module.exports = (req, res) => {
  try {
    const { id } = req.params;
    const response = plants.getPlantById(id)
    res.send(response);
  } catch (err) {
    console.log(err);
  };
};
