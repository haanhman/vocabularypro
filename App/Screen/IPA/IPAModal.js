import React, {Component} from 'react'
import {Modal, TouchableOpacity} from 'react-native'
import {Text, View, Container, Content, Tab, Tabs, H1} from 'native-base';
import {connect} from 'react-redux'
import styles from './Styles/popup'
import Video from './Components/Video'
import PlaySound from './Components/PlaySound'
import {Metrics} from '../../Themes'
import TabBar from '../../../native-base-theme/components/TabBar'
import Icon from 'react-native-vector-icons/Ionicons'
class IPAModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 2,
      bodyHeight: 0
    }
  }

  componentDidMount() {
    const TabBarStyle = TabBar();
    let bodyHeight = Metrics.screenHeight - 20;
    bodyHeight = bodyHeight/6 * 4;
    bodyHeight -= TabBarStyle.height + 4;
    this.setState({bodyHeight});
  }



  render() {
    const {group} = this.props;
    if (group == null) {
      return null;
    }
    const sound = group.sounds[this.state.index];
    var timeOut = setTimeout(() => {
      this.listen.playAllSound();
    }, 2000);
    return (
      <Container>
        <Modal animationType={'slide'} transparent={true} visible={this.props.visible} onRequestClose={() => {
      }}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.closeBtn} onPress={() => {
              clearTimeout(timeOut);
              this.listen.stopAllSound();
              this.props.close();
            }}>
              <Icon name={'ios-close-circle-outline'} size={Metrics.icons.medium} style={{color: 'white'}}></Icon>
            </TouchableOpacity>
            <View style={styles.top}>
              <H1 style={styles.h1}>{group.group}</H1>
            </View>
            <View style={styles.body}>
              <Content style={styles.wapper}>
                <Tabs initialPage={0}>
                  <Tab heading="Listen" style={{height: this.state.bodyHeight}}>
                    <PlaySound audioPath={group.folder} ref={c => this.listen = c} sound={sound} />
                  </Tab>
                  <Tab heading="Video">
                    <Video vid={sound.video} />
                  </Tab>
                </Tabs>
              </Content>
            </View>
            <View style={styles.bottom}>
              <Text>quay lai</Text>
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
