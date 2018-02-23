import React, {Component} from 'react'
import {ScrollView, Text, Image, View, TouchableOpacity} from 'react-native'
import {Images} from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

// import {NativeModules} from 'react-native'
// var audio = NativeModules.MyAudio;
var Sound = require('react-native-sound');

export default class LaunchScreen extends Component {

  media = [];

  componentDidMount() {
    Sound.setCategory('Ambient', true);
    this.playSound('vo.mp3', Sound.MAIN_BUNDLE);
    // this.playSound('3.mp3');
  }

  stopAudio() {
    console.log('length: ' + this.media.length);
    if (this.media.length == 0) {
      return;
    }
    this.media.map(item => {
      item.stop();
      item.release();
    });
  }

  playAudio() {
    const mp3Online = 'https://zmp3-mp3-s1-te-vnno-pt-1.zadn.vn/603a21fff7bb1ee547aa/6745492230489640910?authen=exp=1519432887~acl=/603a21fff7bb1ee547aa/*~hmac=30c067aad43036a0f2b89b510a60b926';
    this.playSound(mp3Online);
  }

  playSound(name, basePath = '') {
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

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch'/>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo}/>
          </View>

          <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => this.stopAudio()}>
            <Text style={{textAlign: 'center', color: 'white'}}>Stop All audio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => this.playAudio()}>
            <Text style={{textAlign: 'center', color: 'white'}}>Play</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    )
  }
}
