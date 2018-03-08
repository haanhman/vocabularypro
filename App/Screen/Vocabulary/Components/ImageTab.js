import React, {Component} from 'react'
import {ScrollView} from 'react-native';
import {Container, Content, View, Text} from 'native-base';
import styles from '../Styles/image_tab'
import ImageListView from './ImageListView'
export default class ImageTab extends Component {
  showSwiper(index) {
    console.log('image index: ' + index);
    // this.props.swiper(true, this.state.images, index);
  }

  render() {

    return (
      <View style={styles.container}>
        <ImageListView showSwiper={(index) => this.showSwiper(index)} images={this.props.images}/>
      </View>

    )
  }
}
