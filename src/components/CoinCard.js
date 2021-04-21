import QRCode from './QRCode';

function CoinCard(props) {
  const {
    coin: { id, name, symbol, price },
  } = props;
  const fullName = `${name} ${`(${symbol})`}`;

  return (
    <div>
      <h3>{fullName}</h3>
      <p>{price}</p>
      <QRCode id={id} data={`${fullName}: ${price}`} />
    </div>
  );
}

export default CoinCard;
