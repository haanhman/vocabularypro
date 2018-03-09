import React, {Component} from 'react'
import {ScrollView} from 'react-native';
import {Content} from 'native-base';
import styles from '../Styles/image_tab'
import ImageListView from './ImageListView'
import ImageSwiper from './ImageSwiper'

export default class ImageTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      showSwiper: false,
    }
  }
  showSwiper(index) {
    console.log('image index: ' + index);
    this.showImageSwiper(true, index);
  }

  showImageSwiper(status, index = 0) {
    this.setState({showSwiper: status, index});
  }

  hideImageSwiper() {
    this.showImageSwiper(false);
  }

  render() {

    return (
      <Content>
        <ImageListView showSwiper={(index) => this.showSwiper(index)} images={this.props.images}/>
        <ImageSwiper index={this.state.index} close={() => this.hideImageSwiper()} images={this.props.images} visible={this.state.showSwiper}/>
      </Content>
    )
  }
}
