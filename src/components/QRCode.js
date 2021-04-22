import QRCode from 'qrcode';
import { useEffect, useRef } from 'react';

function QRCodeComponent(props) {
  const { data, id, size } = props;
  const qrRef = useRef(null);

  useEffect(() => {
    createCode(data, qrRef.current, { size });
  }, [data, size]);

  return (
    <canvas
      id={`qr-code-${id}`}
      ref={qrRef}
      style={{ borderRadius: '1rem' }}
    ></canvas>
  );
}

function createCode(data, canvas, properties) {
  const options = {
    width: properties.size || 100,
    height: properties.size || 100,
    errorCorrectionLevel: 'H',
  };
  QRCode.toCanvas(canvas, data, options, (err) => {
    if (err) console.error(err);
  });
}

export default QRCodeComponent;
