import React, {Component} from 'react'
import {Modal} from 'react-native'
import {Text, View, Container, Content, Tab, Tabs, H1} from 'native-base';
import {connect} from 'react-redux'
import styles from './Styles/popup'
import Video from './Components/Video'
import PlaySound from './Components/PlaySound'
import {Metrics} from '../../Themes'
import TabBar from '../../../native-base-theme/components/TabBar'
var Sound = require('react-native-sound');
class IPAModal extends Component {
  media = [];
  constructor(props) {
    super(props);
    this.state = {
      index: 2,
      bodyHeight: 0
    }
  }

  componentDidMount() {
    const TabBarStyle = TabBar();
    let bodyHeight = Metrics.screenHeight - 20;
    bodyHeight = bodyHeight/6 * 4;
    bodyHeight -= TabBarStyle.height + 4;
    this.setState({bodyHeight});
  }

  playSound(name, basePath = Sound.MAIN_BUNDLE) {
    var sound = new Sound(name, basePath, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());

      sound.play((e) => {
        console.log(e);
        sound.release();
      });
    });
    this.media.push(sound);
  }

  playSoundAudio() {
    const {group} = this.props;
    const sound = group.sounds[this.state.index];
    const folder = 'audio/' + group.folder;
    this.playSound(folder + '/' + sound.audio);
    let delayTime = 1500;
    sound.sample.forEach((sample, index) => {
        setTimeout(() => {
          this.playSound(folder + '/' + sample.audio);
        }, delayTime);
      delayTime+=1500;
    });
  }

  render() {
    const {group} = this.props;
    if (group == null) {
      return null;
    }
    const sound = group.sounds[this.state.index];
    setTimeout(() => {
      this.playSoundAudio();
    }, 2000);
    return (
      <Container>
        <Modal animationType={'slide'} transparent={true} visible={this.props.visible} onRequestClose={() => {
      }}>
          <View style={styles.container}>

            <View style={styles.top}>
              <H1 style={styles.h1}>{group.group}</H1>
            </View>
            <View style={styles.body}>
              <Content style={styles.wapper}>
                <Tabs initialPage={0}>
                  <Tab heading="Listen" style={{height: this.state.bodyHeight}}>
                    <PlaySound sound={sound} />
                  </Tab>
                  <Tab heading="Video">
                    <Video vid={sound.video} />
                  </Tab>
                </Tabs>
              </Content>
            </View>
            <View style={styles.bottom}>
              <Text>quay lai</Text>
            </View>
          </View>
        </Modal>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(IPAModal)
