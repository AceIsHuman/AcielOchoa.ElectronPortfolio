import TwitterTimeline from './TwitterTimeline';

// Styling imports
import styled from 'styled-components';

function TwitterFeeds() {
  return (
    <Wrapper>
      <TwitterTimeline screenName="BBCAfrica" />
      <TwitterTimeline screenName="Ethereum" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 2rem;
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default TwitterFeeds;
