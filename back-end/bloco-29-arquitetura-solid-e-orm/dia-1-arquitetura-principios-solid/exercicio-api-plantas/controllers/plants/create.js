const plants = require('../../plants');

module.exports = (req, res) => {
  try {
    const newPlant = req.body;
    const response = plants.createNewPlant(newPlant);
    res.send(response);
  } catch (err) {
    console.log(err);
  }
};