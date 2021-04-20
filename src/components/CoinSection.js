import CoinCard from './CoinCard';

function CryptoCurrencySection() {
  const coin = [
    { name: 'Tezos (XTZ)', uuid: 'fsIbGOEJWbzxG' },
    { name: 'BurstCoin (BURST)', uuid: 'LUbkfWw7GwJ73' },
    { name: 'Cardano (ADA)', uuid: 'qzawljRxB5bYu' },
  ];

  return (
    <div>
      {coin.map((c) => {
        return <CoinCard name={c.name} uuid={c.uuid} />;
      })}
    </div>
  );
}

export default CryptoCurrencySection;
