import React, {Component} from 'react'
import {Modal, TouchableOpacity} from 'react-native'
import {Container, View, Spinner, H1, Content, Tabs, Tab, Text} from 'native-base';
import styles from '../Styles/detail_popup'
import commonColor from '../../../../native-base-theme/variables/commonColor'
import variable from '../../../../native-base-theme/variables/platform'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Metrics} from '../../../Themes'
import UseTab from './UseTab'
import ImageTab from './ImageTab'
import VideoTab from './VideoTab'
import SearchImageAPI from '../../../Services/SearchImageAPI'
export default class DetailModal extends Component {

  api = null;
  token = '';

  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
    this.api = new SearchImageAPI();
  }

  searchImage() {
    if (this.token == '') {
      this.api.getToken((token) => {
        this.token = token;
        this.searchImageNow();
      });
    } else {
      this.searchImageNow();
    }
  }

  searchImageNow() {
    this.setState({images: []});
    this.api.search(this.props.wordName, this.token, (json) => {
      this.setState({images: json.results});
    })
  }


  onChangeTab() {
    console.log('Tab index: ' + this.tabs.state.currentPage);
  }

  renderTabVideo(totalVideo) {
    return (
      <Tab heading={'Video (' + totalVideo + ')'}>
        <VideoTab word={this.props.word} />
      </Tab>
    );
  }

  renderData() {
    const {word} = this.props;
    if (word == null) {
      return <Spinner color={commonColor.brandDanger}/>;
    }
    const videoData = JSON.parse(word.video_data);
    const totalVideo = videoData.uk.length + videoData.us.length;
    return (
      <Tabs tabBarUnderlineStyle={{backgroundColor: variable.mainBackground}} ref={c => this.tabs = c} locked={true}
            initialPage={2} onChangeTab={() => this.onChangeTab()}>
        <Tab heading="Audio">
          <UseTab word={word}/>
        </Tab>
        <Tab heading="Images">
          <ImageTab images={this.state.images}/>
        </Tab>
        {
          totalVideo > 0 ? this.renderTabVideo(totalVideo) : null
        }
      </Tabs>
    )
  }

  closePopup() {
    this.setState({images: []});
    this.props.close();
  }

  render() {
    const {word} = this.props;
    return (
      <Modal animationType={'slide'} transparent={true} visible={this.props.visible} onRequestClose={() => {
      }}>
        <Container>
          <View style={styles.container}>
            <TouchableOpacity style={styles.closeBtn} onPress={() => {
              this.closePopup()
            }}>
              <Ionicons name={'ios-close-circle-outline'} size={Metrics.icons.medium}
                        style={{color: 'white'}}></Ionicons>
            </TouchableOpacity>
            <View style={styles.top}>
              <H1 style={styles.name}>{this.props.wordName}</H1>
              {word == null ? null : <Text style={styles.wordType}>{word.type}</Text>}
            </View>
            <View style={styles.body}>
              <View style={styles.wapper}>
                {this.renderData()}
              </View>
            </View>
          </View>
        </Container>
      </Modal>
    )
  }
}
