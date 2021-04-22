import NameSection from './NameSection';
import CoinSection from './CoinSection';

import styled from 'styled-components';

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
  width: 95%;
`

export default QRCodeSection;