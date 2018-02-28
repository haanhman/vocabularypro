import React, { Component } from 'react'
import {View, Card, Text, CardItem, Left, Right} from 'native-base';
import styles from '../Styles/style'
import Sound from './Sound'
import {Metrics} from '../../../Themes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default class Group extends Component {

  render () {
    const {item, soundWidth} = this.props;
    return (
      <Card>
        <View style={styles.heading}>
          <Left style={{flex: 3}}>
            <Text>{item.group}</Text>
          </Left>
          <Right style={{flex: 1}}>
            <Icon name={'play-circle'} style={{color: 'red'}} size={Metrics.icons.small}/>
          </Right>
        </View>
        <CardItem style={{flexWrap: 'wrap'}}>
          {
            item.sounds.map((sound, index) => {
              return (
                <Sound key={index} index={index} soundWidth={soundWidth} sound={sound} />
              )
            })
          }
        </CardItem>
      </Card>
    )
  }
}
