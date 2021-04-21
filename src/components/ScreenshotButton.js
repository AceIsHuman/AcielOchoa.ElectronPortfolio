import styled from 'styled-components';
import palette from '../assets/colorScheme';

const { ipcRenderer } = window.require('electron');

function ScreenshotButton() {
  return (
    <Button onClick={e => initScreenshot(e)}>
      Take
      <br />
      Screenshot
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  top: 1%;
  right: 1%;
  background-color: ${palette.accentPrimary};
  color: ${palette.fontSecondary};
  opacity: 0.7;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: 0.2s;
  &:hover {
    opacity: 1;
  }
`

function initScreenshot(e) {
  e.preventDefault();
  ipcRenderer.send('screenshot');
}

export default ScreenshotButton;
