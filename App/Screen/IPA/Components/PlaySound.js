import React, {Component} from 'react'
import {View, Text} from 'native-base';
import {TouchableOpacity} from 'react-native'
import styles from '../Styles/playsound'
import Sample from './Sample'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Metrics} from '../../../Themes'
import {playSound} from '../../../Lib/Audio'
import commonColor from '../../../../native-base-theme/variables/commonColor'
export default class PlaySound extends Component {
  audio = [];
  listTimeOut = [];
  constructor(props) {
    super(props);
  }

  stopAllSound() {
    if(this.audio.length > 0) {
      this.audio.map(item => item.stop());
    }
    if(this.listTimeOut.length > 0) {
      this.listTimeOut.map(item => clearTimeout(item));
    }
  }

  playAllSound() {
    this.playSoundAudio();
    this.playSampleAudio(1500);
  }

  playSoundAudio() {
    const {audioPath, sound} = this.props;
    const folder = 'audio/' + audioPath;
    this.audio.push(playSound(folder + '/' + sound.audio));
  }

  playSampleAudio(startDelay = 0) {
    const {audioPath, sound} = this.props;
    const folder = 'audio/' + audioPath;
    let delayTime = startDelay;
    sound.sample.map(sample => {
      let timeOut = setTimeout(() => {
        this.audio.push(playSound(folder + '/' + sample.audio));
      }, delayTime);
      this.listTimeOut.push(timeOut);
      delayTime += 1500;
    });
  }

  render() {
    const {sound} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.symbol}>
          <TouchableOpacity onPress={() => {
            this.stopAllSound();
            this.playSoundAudio();
          }}>
            <Icon name={'volume-up'} size={Metrics.icons.medium} style={{color: commonColor.brandDanger}}/>
          </TouchableOpacity>
          <Text style={styles.symbolText}>/{sound.symbol}/</Text>
        </View>
        <View style={styles.sample}>
          <TouchableOpacity onPress={() => {
            this.stopAllSound();
            this.playSampleAudio();
          }}>
            <Icon name={'volume-up'} size={Metrics.icons.medium} style={{color: commonColor.brandDanger}}/>
          </TouchableOpacity>
          {
            sound.sample.map((item, index) => {
              return (
                <View style={styles.sampleWord} key={index}>
                  {Sample(item, 'center')}
                </View>
              )
            })
          }
        </View>
      </View>
    );
  }
}
