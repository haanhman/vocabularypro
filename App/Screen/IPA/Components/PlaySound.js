import React, {Component} from 'react'
import {View, Text} from 'native-base';
import styles from '../Styles/playsound'
import Sample from './Sample'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Metrics} from '../../../Themes'
export default class PlaySound extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {sound} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.symbol}>
          <Icon name={'volume-up'} size={Metrics.icons.medium} style={{color: 'red'}} />
          <Text style={styles.symbolText}>/{sound.symbol}/</Text>
        </View>
        <View style={styles.sample}>
          <Icon name={'volume-up'} size={Metrics.icons.medium} style={{color: 'red'}} />
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
