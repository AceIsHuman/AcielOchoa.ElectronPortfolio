import QRCode from './QRCode';
import logo from '../assets/logo.svg';
import styled from 'styled-components';
import palette from '../assets/colorScheme';

function NameSection() {
  return (
    <div>
      <Name>Aciel Ochoa</Name>
      <QRWrapper>
        <QRCode id="full-name" data="Aciel Ochoa" />
        <Badge src={logo} alt="aciel-ochoa-logo" />
      </QRWrapper>
    </div>
  );
}

const QRWrapper = styled.div`
  position: relative;
`;

const Name = styled.h2`
  color: ${palette.fontSecondary};
  text-decoration: underline;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Badge = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default NameSection;
