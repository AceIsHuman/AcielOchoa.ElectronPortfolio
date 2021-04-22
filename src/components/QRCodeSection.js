import NameSection from './NameSection';
import CoinSection from './CoinSection';

import styled from 'styled-components';
import palette from '../assets/colorScheme';

function QRCodeSection() {
  return (
    <Wrapper>
      <NameSection />
      <CoinSection />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 1rem 2.5%;
  width: 100%;
  background-color: ${palette.accentPrimary};
`

export default QRCodeSection;