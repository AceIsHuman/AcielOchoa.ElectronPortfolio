import QRCode from './QRCode';
import styled from 'styled-components';
import palette from '../assets/colorScheme';

function NameSection() {
  return (
    <section style={{ paddingTop: '1rem' }}>
      <Name>Aciel Ochoa</Name>
      <QRCode id="full-name" data="Aciel Ochoa" />
    </section>
  );
}

const Name = styled.h2`
  color: ${palette.fontSecondary};
  text-decoration: underline;
  text-align: center;
`;

export default NameSection;
