import React, {Component} from 'react'
import {Modal, TouchableOpacity} from 'react-native'
import {Text, View, Container, Content, Tab, Tabs, H1} from 'native-base';
import {connect} from 'react-redux'
import styles from './Styles/popup'
import Video from './Components/Video'
import PlaySound from './Components/PlaySound'
import {Metrics} from '../../Themes'
import TabBar from '../../../native-base-theme/components/TabBar'
import commonColor from '../../../native-base-theme/variables/commonColor'
import variable from '../../../native-base-theme/variables/platform'
import Icon from 'react-native-vector-icons/Ionicons'
class IPAModal extends Component {
  timeOut = null;
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      bodyHeight: 0,
      symbolHeight: 0,
      symbolWidth: 0,
    }
  }

  componentDidMount() {
    const TabBarStyle = TabBar();
    let bodyHeight = Metrics.screenHeight - 20;
    let symbolHeight = bodyHeight / 6;
    symbolHeight -= Metrics.baseMargin * 2
    symbolHeight /= 2;

    bodyHeight = bodyHeight / 6 * 4;
    bodyHeight -= TabBarStyle.height + 4;
    let symbolWidth = (Metrics.screenWidth - 20);
    symbolWidth -= Metrics.baseMargin * 3;
    symbolWidth /= 4;
    this.setState({bodyHeight, symbolHeight, symbolWidth});
  }

  changeSound(index) {
    this.stopAllSound();
    this.setState({index});
    if(this.tabs.state.currentPage == 0) {
      this.playSoundAudio();
    }
  }

  stopAllSound() {
    clearTimeout(this.timeOut);
    this.listen.stopAllSound();
  }

  onChangeTab() {
    if(this.tabs.state.currentPage == 0) {
      if(this.youtube != undefined) {
        this.youtube.stopVideo();
      }
    }
    if(this.tabs.state.currentPage == 1) {
      this.stopAllSound();
      return;
    }
    this.playSoundAudio();
  }

  playSoundAudio() {
    this.timeOut = setTimeout(() => {
      this.listen.playAllSound();
    }, 1000);
  }

  render() {
    const {group} = this.props;
    if (group == null) {
      return null;
    }
    const sound = group.sounds[this.state.index];
    return (
      <Container>
        <Modal animationType={'slide'} transparent={true} visible={this.props.visible} onRequestClose={() => {
        }}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.closeBtn} onPress={() => {
              this.stopAllSound();
              this.setState({index: 0});
              this.props.close();
            }}>
              <Icon name={'ios-close-circle-outline'} size={Metrics.icons.medium} style={{color: 'white'}}></Icon>
            </TouchableOpacity>
            <View style={styles.top}>
              <H1 style={styles.h1}>{group.group}</H1>
            </View>
            <View style={styles.body}>
              <Content style={styles.wapper}>
                <Tabs tabBarUnderlineStyle={{backgroundColor: variable.mainBackground}} ref={c => this.tabs = c} locked={true} initialPage={0} onChangeTab={() => this.onChangeTab()}>
                  <Tab heading="Listen" style={{height: this.state.bodyHeight}}>
                    <PlaySound audioPath={group.folder} ref={c => this.listen = c} sound={sound}/>
                  </Tab>
                  <Tab heading="Video">
                    <Video ref={c => this.youtube = c} vid={sound.video}/>
                  </Tab>
                </Tabs>
              </Content>
            </View>
            <View style={styles.bottom}>
              {
                group.sounds.map((s, index) => {
                  return (
                    <TouchableOpacity key={index} onPress={() => this.changeSound(index)}>
                      <View style={[
                        styles.symbol,
                        {
                          height: this.state.symbolHeight,
                          width: this.state.symbolWidth
                        },
                        (index + 1) % 4 == 0 ? {marginRight: 0} : {}
                      ]}>
                        <Text style={[
                          styles.symbolText,
                          this.state.index == index ? {color: commonColor.brandDanger} : {}
                        ]}>/{s.symbol}/</Text>
                      </View>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>
        </Modal>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(IPAModal)
