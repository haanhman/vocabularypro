import React, {Component} from 'react'
import {TouchableOpacity} from 'react-native';
import {Content, Text} from 'native-base';
import styles from '../Styles/video_tab'
export default class VideoTab extends Component {

  render() {
    const {word} = this.props;
    const videoData = JSON.parse(word.video_data);
    return (
      <Content>
        <Text>{JSON.stringify(videoData)}</Text>
      </Content>
    )
  }
}
