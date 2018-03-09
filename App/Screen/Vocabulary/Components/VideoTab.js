import React, {Component} from 'react'
import {TouchableOpacity, Image} from 'react-native';
import {Content, Text, Spinner, View} from 'native-base';
import styles from '../Styles/video_tab'
import YouTube from 'react-native-youtube'
import variable from '../../../../native-base-theme/variables/platform';
import commonColor from '../../../../native-base-theme/variables/commonColor';
import {Metrics} from '../../../Themes'
import CaptionAPI from '../../../Services/CaptionAPI'
import Ionicons from 'react-native-vector-icons/Ionicons'
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
      sub: 'Loading subtitle...',
      captions: {},
      currentCaption: {},
      iconPlay: 'ios-play'
    }
    this.loadCaption();
  }

  getVideo() {
    console.log('this.state.videoIndex: ' + this.state.videoIndex);
    return this.videoData[this.state.videoLang][this.state.videoIndex];
  }

  onChangeState = (e) => {
    const {state} = e;
    if (state == 'playing') {
      const videoData = this.getVideo();
      if (!this.state.seekToCall) {
        console.log('seekTo video');
        this.youtube.seekTo(videoData.start);
        this.setState({seekToCall: true});
      }

      this.setState({sub: videoData.text});
      this.captionInterval = setInterval(() => {
        this.showCaption();
      }, 1000);
      this.setState({playStatus: true, iconPlay: 'ios-pause'});
    } else {
      this.setState({iconPlay: 'ios-play'});
      clearInterval(this.captionInterval);
    }
    this.setState({status: e.state});
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

  loadCaption(autoPlayVideo = false) {
    let {captions} = this.state;
    const videoData = this.getVideo();
    console.log(videoData);
    if (captions.hasOwnProperty(videoData.vid)) {
      this.setState({currentCaption: captions[videoData.vid]});
      console.log('Video: ' + videoData.vid + ' da load caption roi');
      console.log(JSON.stringify(Object.keys(captions)));
      if (autoPlayVideo == true) {
        this.youtube.seekTo(videoData.start);
        this.setState({seekToCall: true});
        this.pauseVideo();
      }
      return;
    }
    this.captionAPI.getCaption(videoData.vid, (json) => {
      captions[videoData.vid] = json;
      this.setState({captions});
      this.setState({currentCaption: json});
      if (autoPlayVideo == true) {
        this.pauseVideo();
      }
    });
  }


  renderCaption() {
    if (!this.state.initYoutube) {
      return null;
    }
    return (
      <View style={styles.caption}>
        <Text style={styles.subtitle}>{this.state.sub}</Text>
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

  renderButtonFunction() {
    if (!this.state.initYoutube) {
      return null;
    }
    return (
      <View style={styles.bottomFunction}>
        <Text style={styles.staticVideo}>{this.state.videoIndex + 1}/{this.videoData[this.state.videoLang].length} videos</Text>
        <View style={styles.listButtom}>
          <TouchableOpacity style={styles.btn} onPress={() => this.backVideo()}>
            <Ionicons name='ios-arrow-back' size={Metrics.icons.medium} color={commonColor.brandDanger}/>
            <Text style={styles.textBack}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => this.pauseVideo()}>
            <Ionicons name={this.state.iconPlay} size={Metrics.icons.medium} color={commonColor.brandDanger}/>
            <Text style={styles.textBack}>{this.state.iconPlay == 'ios-play' ? 'Play' : 'Pause'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => this.nextVideo()}>
            <Text style={styles.textNext}>Next</Text>
            <Ionicons name='ios-arrow-forward' size={Metrics.icons.medium} color={commonColor.brandDanger}/>
          </TouchableOpacity>
        </View>
        <View style={styles.langVideo}>
          <TouchableOpacity style={styles.flag} onPress={() => this.setState({videoLang: 'uk', videoIndex: 0})}>
            <Image style={styles.flagImage} source={require('../../../Images/united-kingdom.png')}/>
            <View>
              <Text>United Kingdom</Text>
              <Text>{this.videoData['uk'].length} videos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flag} onPress={() => this.setState({videoLang: 'us', videoIndex: 0})}>
            <Image  style={styles.flagImage} source={require('../../../Images/united-states.png')}/>
            <View>
              <Text>United States</Text>
              <Text>{this.videoData['us'].length} videos</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  stopVideo() {
    clearInterval(this.captionInterval);
    this.setState({
      seekToCall: false,
      playStatus: false,
      sub: 'Loading subtitle...'
    });
  }

  backVideo() {
    if (this.state.videoIndex <= 0) {
      return;
    }
    this.stopVideo();
    this.setState(e => ({videoIndex: e.videoIndex - 1}));
    setTimeout(() => {
      this.loadCaption(true)
    }, 500);
  }

  nextVideo() {
    if (this.state.videoIndex >= this.videoData[this.state.videoLang].length) {
      return;
    }
    this.stopVideo();
    this.setState(e => ({videoIndex: e.videoIndex + 1}));
    setTimeout(() => {
      this.loadCaption(true)
    }, 500);
  }

  pauseVideo() {
    this.setState(e => ({playStatus: !e.playStatus}));
    console.log('pauseVideo');
  }

  render() {
    return (
      <Content>
        {
          (this.state.initYoutube && this.state.isReady) ? null : <Spinner color={variable.mainBackground}/>
        }
        {this.renderYoutubePlayer()}
        {this.renderCaption()}
        {this.renderButtonFunction()}
      </Content>
    )
  }
}
