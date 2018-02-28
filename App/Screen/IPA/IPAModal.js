import React, {Component} from 'react'
import {Modal} from 'react-native'
import {Text, View, Container, Content, Tab, Tabs, H1} from 'native-base';
import {connect} from 'react-redux'
import styles from './Styles/popup'
import Video from './Components/Video'
import PlaySound from './Components/PlaySound'
class IPAModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  componentDidMount() {

  }

  render() {
    const {group} = this.props;
    if(group == null) {
      return null;
    }
    console.log(group);
    const sound = group.sounds[this.state.index];
    return (
      <Modal animationType={'slide'} transparent={true} visible={this.props.visible} onRequestClose={() => {
      }}>
        <View style={styles.container}>

          <View style={styles.top}>
            <H1 style={styles.h1}>{group.group}</H1>
          </View>
          <View style={styles.body}>
            <Container style={styles.wapper}>
              <Content>
                <Tabs initialPage={0}>
                  <Tab heading="Listen">
                    <PlaySound sound={sound} style={{flex: 1}} />
                  </Tab>
                  <Tab heading="Video">
                    <Video vid={sound.video} style={{flex: 1}} />
                  </Tab>
                </Tabs>
              </Content>
            </Container>
          </View>
          <View style={styles.bottom}></View>
        </View>
      </Modal>
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
