const express = require('express');
const plants = require('./plants/router');

const root = express.Router({ mergeParams: true });

root.use('/plants', plants);

module.exports = root;
