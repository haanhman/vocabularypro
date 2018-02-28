import React, {Component} from 'react'
import YouTube from 'react-native-youtube'
export default class Video extends Component {

  onChangeState = (e) => {
    const {state} = e;
    // if (state == 'buffering' && !this.state.seekToCall) {
    //   if(this.state.sub == '') {
    //     this.setState({sub: 'Loading subtitle...'});
    //   }
    //   this.youtube.seekTo(137);
    //   this.setState({seekToCall: true});
    // }
    this.setState({status: e.state})
  }

  render() {

    return (
      <YouTube
        apiKey={'AIzaSyDELqju3e3MnUIxCKOc1RAZG7QLCTvhghY'}
        ref={(ref) => this.youtube = ref}
        videoId={this.props.vid}   // The YouTube video ID
        play={false}             // control playback of video with true/false
        fullscreen={false}       // control whether the video should play in fullscreen or inline
        loop={false}             // control whether the video should loop when ended

        onReady={e => this.setState({isReady: true})}
        onChangeState={e => this.onChangeState(e)}
        onChangeQuality={e => this.setState({quality: e.quality})}
        onError={e => this.setState({error: e.error})}

        style={{alignSelf: 'stretch', height: 178}}
      />
    )
  }
}
