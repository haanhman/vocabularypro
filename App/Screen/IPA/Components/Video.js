import React, {Component} from 'react'
import YouTube from 'react-native-youtube'
import {View, Spinner} from 'native-base'
import variable from '../../../../native-base-theme/variables/platform';
export default class Video extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playStatus: true,
      initYoutube: false
    }
  }

  onChangeState = (e) => {
    const {state} = e;
    if (state == 'playing') {
      this.setState(e => ({playStatus: true}));
    }
    this.setState({status: e.state});
  }


  stopVideo() {
    this.setState(e => ({playStatus: !e.playStatus}));
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({initYoutube: true});
    }, 100);
  }

  renderYoutubePlayer() {
    let player = null;
    if (this.state.initYoutube) {
      player = <YouTube
        apiKey={'AIzaSyDELqju3e3MnUIxCKOc1RAZG7QLCTvhghY'}
        ref={(ref) => this.youtube = ref}
        videoId={this.props.vid}   // The YouTube video ID
        play={this.state.playStatus}             // control playback of video with true/false
        fullscreen={false}       // control whether the video should play in fullscreen or inline
        loop={false}             // control whether the video should loop when ended

        onReady={e => this.setState({isReady: true})}
        onChangeState={e => this.onChangeState(e)}
        onChangeQuality={e => this.setState({quality: e.quality})}
        onError={e => this.setState({error: e.error})}

        style={{alignSelf: 'stretch', height: 178}}
      />
    }
    return player;
  }

  render() {

    return (
      <View>
        {
          (this.state.initYoutube && this.state.isReady) ? null : <Spinner color={variable.mainBackground} />
        }
        {this.renderYoutubePlayer()}
      </View>
    )
  }
}
