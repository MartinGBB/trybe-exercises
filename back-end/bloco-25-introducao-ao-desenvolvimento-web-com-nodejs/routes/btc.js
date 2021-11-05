const express = require('express');
const validToken = require('../middlewares/authorization');
const fetchAPI = require('../middlewares/fetch-API');

const price = express.Router();

price.get(
  '/price',
  validToken,
  fetchAPI,
);

module.exports = price;
