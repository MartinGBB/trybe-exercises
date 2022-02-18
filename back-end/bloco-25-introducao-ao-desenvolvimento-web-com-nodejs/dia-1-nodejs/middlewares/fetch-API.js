const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const fetchAPI = async (_req, res) => {
  const result = await fetch(endpoint);
  res.status(200).json(result.data);
};

module.exports = fetchAPI;
