import { useState, useEffect } from 'react';
import cmcRequest from '../utils/cmcAPI/cmcRequest';
import CoinCard from './CoinCard';

function CryptoCurrencySection() {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    // CoinMarketCap ids for [Tezos, Burst, Cardano]
    const ids = [2011, 573, 2010];

    // Make CMC API request to retrive prices
    cmcRequest()
      .get(`/cryptocurrency/quotes/latest?id=${ids.join(',')}`)
      .then((res) => {
        let data = [];
        for (let coin of res.data) {
          data.push({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            price: `$${coin.quote.USD.price.toFixed(5)}`,
          });
        }
        // Store prices from retrieved data in state.
        setCoin(data);
      })
      .catch((err) => console.error(err.message));
  });

  return (
    <div>
      {coin.length &&
        coin.map((c) => {
          return <CoinCard key={`coin-card-${c.id}`} coin={c} />;
        })}
    </div>
  );
}

export default CryptoCurrencySection;
