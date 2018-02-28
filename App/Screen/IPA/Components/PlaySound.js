import React, {Component} from 'react'
import {View, Text} from 'native-base';
import styles from '../Styles/playsound'
import Sample from './Sample'
export default class PlaySound extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {sound} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.symbol}>
          <Text style={styles.symbolText}>/{sound.symbol}/</Text>
        </View>
        <View style={styles.sample}>
          {
            sound.sample.map((item, index) => {
              return (
                <View key={index}>
                  {Sample(item)}
                </View>
              )
            })
          }
        </View>
      </View>
    );
  }
}
