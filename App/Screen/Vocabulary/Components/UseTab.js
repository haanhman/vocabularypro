import React, {Component} from 'react'
import {TouchableOpacity} from 'react-native';
import {View, Text, H3} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Metrics} from '../../../Themes'
import commonColor from '../../../../native-base-theme/variables/commonColor'
import styles from '../Styles/use_tab'
import {playSound} from '../../../Lib/Audio'
export default class UseTab extends Component {

  playAudio(mp3) {
    playSound(mp3, '');
  }

  renderAudio(audios, name) {
    if (audios.length == 0) {
      return null;
    }

    return (
      <View style={styles.audio_group}>
        <H3 style={styles.heading}>{name}</H3>
        <View style={styles.languageAudio}>
          {
            audios.map((item, index) => {
              return (
                <View style={styles.audio} key={index}>
                  <TouchableOpacity style={styles.audio_btn} onPress={() => {
                    this.playAudio(item.mp3)
                  }}>
                    {
                      item.prefix.length == 0 ? null : item.prefix.map((prefix, index) => {
                        return <Text key={index} style={styles.audio_prefix}>{prefix} </Text>
                      })
                    }
                    <Text style={styles.audio_phonic}>/{item.phonic}/</Text>
                    <MaterialIcons name='volume-up' size={Metrics.icons.medium} color={name == 'English' ? '#07265d' : commonColor.brandDanger}/>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }

  renderSample(sample = []) {
    if (sample.length == 0) {
      return null;
    }
    return (
      <View style={styles.eg}>
        {
          sample.map((item, index) => {
            return (
              <Text key={index}><Text style={styles.dot}>•</Text> {item}</Text>
            )
          })
        }
      </View>
    )
  }

  renderUseDetail(use = []) {
    if (use.length == 0) {
      return null;
    }
    return use.map((item, index) => {
      return (
        <View key={index} style={styles.use_group}>
          <Text style={styles.use_desc}>
            {item.desc}
          </Text>
          {this.renderSample(item.eg)}
        </View>
      )
    });
  }

  render() {
    const {word} = this.props;
    const audioData = JSON.parse(word.audio_data);
    return (
      <View style={styles.container}>

        {this.renderAudio(audioData.uk, 'English')}
        {this.renderAudio(audioData.us, 'American English')}

        <View style={styles.use}>
          {this.renderUseDetail(JSON.parse(word.use))}
        </View>

      </View>
    )
  }
}
