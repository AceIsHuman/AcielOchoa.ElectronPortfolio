const axios = require('axios');

function cmcRequest() {
  return axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/',
    headers: {
      Accept: 'application/json',
      'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY,
    },
  });
}

module.exports = cmcRequest;
