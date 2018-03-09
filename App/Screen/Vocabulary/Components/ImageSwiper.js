import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, Modal, Image, TouchableOpacity} from 'react-native'
import styles from '../Styles/ImageSwiperStyle'
import Swiper from 'react-native-swiper';
import {getImageHeight} from '../../../Lib/global'
import {Metrics} from '../../../Themes'
import Icon from 'react-native-vector-icons/Ionicons'
export default class ImageSwiper extends Component {
  render() {
    return (
      <Modal animationType={'slide'} transparent={true} visible={this.props.visible} onRequestClose={() => {
      }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.close()} style={styles.btnClose}>
            <Icon name={'ios-close'} size={Metrics.icons.medium} style={styles.iconClose}></Icon>
          </TouchableOpacity>
          <Swiper index={this.props.index} activeDotStyle={styles.activeDotStyle} dotStyle={styles.dotStyle} style={styles.wrapper}
                  showsButtons={false}>
            {
              this.props.images.map((item, index) => {
                return (
                  <View key={index} style={styles.slide}>
                    <Image source={{uri: item.unescapedUrl}} style={{
                      width: Metrics.screenWidth,
                      height: getImageHeight(Metrics.screenWidth, item.width, item.height)
                    }}/>
                  </View>
                );
              })
            }
          </Swiper>
        </View>
      </Modal>
    )
  }
}
