import NameSection from './components/NameSection';
import CoinSection from './components/CoinSection';
import TwitterFeeds from './components/TwitterFeeds';
import Footer from './components/Footer';
import ScreenshotButton from './components/ScreenshotButton';

// Styling imports
import styled from 'styled-components';
import palette from './assets/colorScheme';
import './index.css';

const { ipcRenderer } = window.require('electron');

function App() {

  ipcRenderer.on('alertRenderer', (e, payload) => {
    alert(payload.message);
  })

  return (
    <Wrapper>
      <NameSection />
      <CoinSection />
      <TwitterFeeds />
      <Footer />
      <ScreenshotButton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${palette.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default App;
