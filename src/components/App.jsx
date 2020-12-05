import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    //console.log('here are the props', props);
    this.videoSwitch = this.videoSwitch.bind(this);
    this.state = {
      videoArray: [],
      currentVideo: exampleVideoData[0]
    };
  }


  videoSwitch (video) {
    //console.log('clicked');
    this.setState({
      currentVideo: video
    });
  }

  componentDidMount() {
    console.log(this.props);

    var options = {
      key: YOUTUBE_API_KEY,
      query: 'dog',
      max: 5
    };

    var successCB = (data)=>{   
      //array of objects
      this.setState({
        currentVideo: data[0],
        videoArray: data
      });
    };

    this.props.searchYouTube(options, successCB);
  }


  render() {
    // if (this.state.videoArray.length === 0) {
    //   return <h2>loading page</h2>;
    // }
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videoSwitch={this.videoSwitch} videos={this.state.videoArray}/>
        </div>
      </div>
    </div>
    );
  }
}

//  In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
