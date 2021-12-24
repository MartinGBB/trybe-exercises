const fetch = require('node-fetch');
const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCoins = async () => {
  const coins = await fetch(API_URL)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => error.toString());
  return coins;
};

const topTenCoins = async () => {
  const listCoins = await fetchCoins();
  const coins = listCoins.filter(({ rank }) => rank <= 10)
  .map(({ name, symbol, priceUsd }) => {
    return `${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`
  })
  return console.log(coins);
}

topTenCoins();
