import Link from './Link';

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
    <footer>
      {links.map((link) => (
        <Link key={link.url} url={link.url} text={link.text} />
      ))}
    </footer>
  );
}

export default Footer;
