const plant = require('../../plants');

module.exports = (req, res) => {
  try {
    const { id } = req.params;
    const updatePlant = req.body;
    const result = plant.editPlant(id, updatePlant);
    res.send(result)
  } catch (err) {
    console.log(err);
  };
};
