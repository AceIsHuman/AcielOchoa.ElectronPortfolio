import { Timeline } from 'react-twitter-widgets';

function TwitterTimeline(props) {
  const { screenName } = props;
  return (
    <div>
      <Timeline
        dataSource={{ sourceType: 'profile', screenName }}
        options={{ width: 500, height: 600 }}
      />
    </div>
  );
}

export default TwitterTimeline;
