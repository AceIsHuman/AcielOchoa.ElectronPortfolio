import QRCode from './QRCode';

// Styling imports
import styled from 'styled-components';
import palette from '../assets/colorScheme';

function CoinCard(props) {
  const {
    coin: { id, name, symbol, price },
  } = props;
  const fullName = `${name} ${`(${symbol})`}`;

  return (
    <div>
      <Name>{fullName}</Name>
      <Price>{price}</Price>
      <QRCode id={id} data={`${fullName}: ${price}`} />
    </div>
  );
}

const Name = styled.h3`
  color: ${palette.fontPrimary};
  text-decoration: underline;
`

const Price = styled.p`
  color: ${palette.fontSecondary};
  margin-bottom: 0.5rem;
`

export default CoinCard;
