function Link(props) {
  const { url, text, ...rest } = props;
  return (
    <a {...rest} href={url} rel="noreferrer noopener" style={{ color: props.color }}>
      {text}
    </a>
  );
}

export default Link;
