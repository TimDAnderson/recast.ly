import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.videoSwitch = this.videoSwitch.bind(this);
    this.state = {
      videoArray: [],
      currentVideo: exampleVideoData[0]
    };
  }

  // componentDidMount() {
  //   this.searchYouTube;
  // }



  videoSwitch (video) {
    //console.log('clicked');
    this.setState({
      currentVideo: video
    });
  }

  render() {
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
