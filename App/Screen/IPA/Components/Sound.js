import React, {Component} from 'react'
import {View, Text} from 'native-base';
import styles from '../Styles/style'
export default class Sound extends Component {

  renderSample(sample) {
    const {word, bold} = sample;
    let letter = [];
    for (let i = 0; i < word.length; i++) {
      letter.push(word[i]);
    }
    return (
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 3}}>
        <View style={{flexDirection: 'row'}}>
          {
            letter.map((c, index) => {
              let letterStyle = {};
              if (bold.find(k => k == index) != undefined) {
                letterStyle = styles.bold;
              }
              return (
                <Text style={letterStyle} key={index}>{c}</Text>
              )
            })
          }
        </View>
      </View>
    )
  }

  render() {
    const {index, soundWidth, sound} = this.props;
    const {word, bold} = sound.sample[0];

    return (
      <View style={[
        styles.symbolWapper,
        {width: soundWidth},
        (index + 1) % 4 == 0 ? {marginRight: 0} : {}
      ]}>
        <Text style={styles.symbol}>{sound.symbol}</Text>
        {this.renderSample(sound.sample[0])}
      </View>
    )
  }
}
