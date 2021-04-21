import Link from './Link';

// Styling imports
import styled from 'styled-components';
import palette from '../assets/colorScheme';

function Footer() {
  const links = [
    { url: 'https://github.com/AceIsHuman', text: 'GitHub' },
    { url: 'https://www.linkedin.com/in/aciel-ochoa/', text: 'LinkedIn' },
    {
      url: 'mailto:aciel.ochoa1995@gmail.com',
      text: 'aciel.ochoa1995@gmail.com',
    },
    {
      url:
        'https://drive.google.com/file/d/1FIR2DLDeVAVJqzPpWKzvCIUcLWzNhPOx/view?usp=sharing',
      text: 'Resume',
    },
  ];

  return (
    <Wrapper>
      {links.map((link) => (
        <Link key={link.url} url={link.url} text={link.text} color={palette.fontSecondary}/>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: ${palette.secondary};
  width: 100%;
  margin-top: 2rem;
  padding: 2rem 2.5%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export default Footer;
