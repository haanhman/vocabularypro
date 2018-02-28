import React, {Component} from 'react'
import {View, Text} from 'native-base';
import styles from '../Styles/style'
import Sample from './Sample'
export default class Sound extends Component {
  render() {
    const {index, soundWidth, sound} = this.props;
    return (
      <View style={[
        styles.symbolWapper,
        {width: soundWidth},
        (index + 1) % 4 == 0 ? {marginRight: 0} : {}
      ]}>
        <Text style={styles.symbol}>{sound.symbol}</Text>
        {Sample(sound.sample[0])}
      </View>
    )
  }
}
