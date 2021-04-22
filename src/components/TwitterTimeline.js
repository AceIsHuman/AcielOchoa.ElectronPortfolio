import { Timeline } from 'react-twitter-widgets';

function TwitterTimeline(props) {
  const { screenName, width, height } = props;

  return (
    <div>
      {width && height && (
        <Timeline
          dataSource={{ sourceType: 'profile', screenName }}
          options={{ width, height }}
        />
      )}
    </div>
  );
}

export default TwitterTimeline;
