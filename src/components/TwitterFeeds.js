import TwitterTimeline from './TwitterTimeline';

function TwitterFeeds() {
  return (
    <section>
      <TwitterTimeline screenName="BBCAfrica" />
      <TwitterTimeline screenName="Ethereum" />
    </section>
  );
}

export default TwitterFeeds;
