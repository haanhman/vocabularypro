import React, {Component} from 'react'
import {TouchableOpacity} from 'react-native';
import {Content, Text, Spinner, View} from 'native-base';
import styles from '../Styles/video_tab'
import YouTube from 'react-native-youtube'
import variable from '../../../../native-base-theme/variables/platform';
import {Metrics} from '../../../Themes'
import CaptionAPI from '../../../Services/CaptionAPI'
export default class VideoTab extends Component {
  captionAPI = null;
  videoData = null;
  captionInterval = null;
  currentTime = -1;
  constructor(props) {
    super(props);
    this.videoData = JSON.parse(this.props.word.video_data);
    this.captionAPI = new CaptionAPI();
    this.state = {
      initYoutube: false,
      videoLang: 'uk',
      videoIndex: 0,
      playStatus: false,
      seekToCall: false,
      sub: '',
      captions: {},
      currentCaption: {}
    }
    this.loadCaption();
  }

  getVideo() {
    return this.videoData[this.state.videoLang][this.state.videoIndex];
  }

  onChangeState = (e) => {
    const {state} = e;

    if (state == 'buffering' && !this.state.seekToCall) {
      if(this.state.sub == '') {
        this.setState({sub: 'Loading subtitle...'});
      }
      const videoData = this.getVideo();
      this.youtube.seekTo(videoData.start);
      this.setState({seekToCall: true});
    }



    if (state == 'playing') {
      this.captionInterval = setInterval(() => {
        this.showCaption();
      }, 1000);
      this.setState(e => ({playStatus: true}));
    } else {
      clearInterval(this.captionInterval);
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
    if (!this.state.initYoutube) {
      return player;
    }
    const videoHeight = (Metrics.screenWidth - 20) / 16 * 9;
    const videoData = this.getVideo();
    player = <YouTube
      apiKey={'AIzaSyDELqju3e3MnUIxCKOc1RAZG7QLCTvhghY'}
      ref={(ref) => this.youtube = ref}
      videoId={videoData.vid}   // The YouTube video ID
      play={this.state.playStatus}             // control playback of video with true/false
      fullscreen={false}       // control whether the video should play in fullscreen or inline
      loop={false}             // control whether the video should loop when ended

      onReady={e => this.setState({isReady: true})}
      onChangeState={e => this.onChangeState(e)}
      onChangeQuality={e => this.setState({quality: e.quality})}
      onError={e => this.setState({error: e.error})}

      style={{alignSelf: 'stretch', height: videoHeight}}
    />
    return player;
  }

  loadCaption() {
    let {captions} = this.state;
    const videoData = this.getVideo();
    console.log(videoData);
    if(captions.hasOwnProperty(videoData.vid)) {
      this.setState({currentCaption: captions[videoData.vid]});
      console.log('Video: ' + videoData.vid + ' da load caption roi');
      return;
    }
    this.captionAPI.getCaption(videoData.vid, (json) => {
      captions[videoData.vid] = json;
      this.setState({captions});
      this.setState({currentCaption: json});
    });
  }


  renderCaption() {
    if (!this.state.initYoutube) {
      return null;
    }
    const sub = "go home and make a healthy one\nForget her, leave her in the institution";

    return (
      <View style={styles.caption}>
        <Text style={styles.subtitle}>{sub}</Text>
      </View>
    )
  }

  showCaption() {
    const subtitleKeys = Object.keys(this.state.currentCaption);
    this.youtube.currentTime().then((time) => {
      if (time != this.currentTime && subtitleKeys.find(a => a == time)) {
        this.currentTime = time;
        this.setState({sub: this.state.currentCaption[time].text});
      }
    });
  }

  render() {
    return (
      <Content>
        {
          (this.state.initYoutube && this.state.isReady) ? null : <Spinner color={variable.mainBackground} />
        }
        {this.renderYoutubePlayer()}
        {this.renderCaption()}
      </Content>
    )
  }
}
