import { useState, useEffect } from 'react';
import CoinCard from './CoinCard';

const { ipcRenderer } = window.require('electron');

function CryptoCurrencySection() {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    // CoinMarketCap ids for [Tezos, Burst, Cardano]
    const ids = [2011, 573, 2010];

    // Make CMC API request to retrive prices
    ipcRenderer.send(
      'cmcRequest',
      `/cryptocurrency/quotes/latest?id=${ids.join(',')}`
    );
    ipcRenderer.on('cmcResponse', (e, res) => {
      setCoin(res);
    });
  }, []);

  return (
    <>
      {coin.length &&
        coin.map((c) => {
          return <CoinCard key={`coin-card-${c.id}`} coin={c} />;
        })}
    </>
  );
}

export default CryptoCurrencySection;
