const express = require('express');
const teams = express.Router();

teams.post('/', 
(req, res) => {
  const { name, initials, country, league } = req.body;
  // const nameLength = name.length < 5;
  // const initialsLength = initials.length > 3 || initials.toUpperCase();
  // const countryLength = country.length < 3;
  
  if (!name || name.length < 5 || !initials || initials.length > 3 || country || country.length < 3) {
    return res.status(400).json({ message: 'invalid data'});
  };
  const newTeams = { ...req.body };
  res.status(200).json(newTeams);
}
);
module.exports = teams;
