import TwitterTimeline from './TwitterTimeline';
import { useEffect, useRef, useState } from 'react';

// Styling imports
import styled from 'styled-components';

function TwitterFeeds() {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const wrapper = useRef(null);

  useEffect(() => {
    // Calculate width and height of each twitter feed
    const w = (Math.floor(wrapper.current.scrollWidth / 100) * 100) / 2;
    const h = Math.floor(wrapper.current.scrollHeight / 100) * 100;
    setWidth(w);
    setHeight(h);
  }, [wrapper]);

  return (
    <Wrapper ref={wrapper}>
      <TwitterTimeline screenName="BBCAfrica" width={width} height={height} />
      <TwitterTimeline screenName="Ethereum" width={width} height={height} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  maxWidth: 120rem;
`;

export default TwitterFeeds;
