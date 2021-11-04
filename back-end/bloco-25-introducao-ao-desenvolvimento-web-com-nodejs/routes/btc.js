const express = require('express');
const validToken = require('../middlewares/authorization');
const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const price = express.Router();

price.get(
  '/price',
  validToken,
  async (_req, res) => {
    const result = await fetch(endpoint);
    res.status(200).json(result.data);
  }
);

module.exports = price;