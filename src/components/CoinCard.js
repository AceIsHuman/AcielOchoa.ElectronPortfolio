import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

function CoinCard(props) {
  const {
    coin: { id, name, symbol, price },
  } = props;
  const fullName = `${name} ${`(${symbol})`}`;
  const qrRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById(`coin-qr-code-${id}`);
    QRCode.toCanvas(canvas, `${fullName}: ${price}`, (err) => {
      if (err) console.error(err);
    });
  }, [fullName, id, price]);

  return (
    <div>
      <h3>{fullName}</h3>
      <p>{price}</p>
      <canvas id={`coin-qr-code-${id}`} ref={qrRef}></canvas>
    </div>
  );
}

export default CoinCard;
