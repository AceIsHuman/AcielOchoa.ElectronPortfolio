function Link(props) {
  const { url, text, ...rest } = props;
  return (
    <a {...rest} href={url} rel="noreferrer noopener">
      {text}
    </a>
  );
}

export default Link;
