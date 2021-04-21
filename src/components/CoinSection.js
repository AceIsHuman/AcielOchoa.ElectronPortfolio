import { useState, useEffect } from 'react';
import CoinCard from './CoinCard';

import styled from 'styled-components';

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
    <Wrapper>
      {coin.length &&
        coin.map((c) => {
          return <CoinCard key={`coin-card-${c.id}`} coin={c} />;
        })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 2rem;
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

export default CryptoCurrencySection;
