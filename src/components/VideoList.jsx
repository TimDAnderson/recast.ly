import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';


//video list is the container of all videos present

//video player is the main video and is apart of the list

//trying to figure out how the data from our example data is being
//passed into video list entry which gets passed into video list
//which then gets rendered/passed to the dom

//thanks for the help

// conditional rendering

var VideoList = (props) => (

  // if (props.videos.length === 0) {
  //   return <h2>loading page</h2>;
  // }


  <div className="video-list">
    {props.videos.map(videos =>
      <VideoListEntry videoSwitch={props.videoSwitch} video={videos}
        key = {videos.id.videoId} />
    )}
  </div>

);






// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

