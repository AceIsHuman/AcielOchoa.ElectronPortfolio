import QRCode from 'qrcode';
import { useEffect, useRef } from 'react';

function QRCodeComponent(props) {
  const { data, id } = props;
  const qrRef = useRef(null);

  useEffect(() => {
    createCode(data, qrRef.current);
  }, [data])

  return (
    <canvas id={`qr-code-${id}`} ref={qrRef}></canvas>
  )
}

function createCode(data, canvas) {
  const options = {
    width: 100,
    height: 100
  }
  QRCode.toCanvas(canvas, data, options, err => {
    if (err) console.error(err);
  });
};

export default QRCodeComponent;