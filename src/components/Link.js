import styled from 'styled-components';

function Link(props) {
  const { url, text, ...rest } = props;
  return (
    <Anchor {...rest} href={url} rel="noreferrer noopener">
      {text}
    </Anchor>
  );
}

const Anchor = styled.a`
  color: ${(p) => p.color};
  transition: 0.5s;
  &:hover {
    text-decoration: underline;
    transform: translate(0, -10%) scale(1.1);
  } 
`;

export default Link;
