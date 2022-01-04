const plants = require('../../plants');


module.exports = (_req, res) => {
  try {
    const response = plants.getPlants();
    res.send(response);
  } catch (err) {
    console.log(err);
  };
};
