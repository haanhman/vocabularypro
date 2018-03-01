import React, {Component} from "react";
import {TouchableOpacity} from "react-native";
import {Container, Card, View, Content} from "native-base";
import {Image} from 'react-native';
import {connect} from "react-redux";
import {Images, Metrics} from '../../Themes';
import {getImageHeight} from '../../Lib/global'
import styles from './Styles/style'
class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  openScreen(screenName) {
    this.props.navigation.navigate(screenName);
  }

  render() {
    const imgWidth = Metrics.screenWidth - 4;
    return (
      <Container>
        <Content>
          <Card style={styles.cardIPA}>
            <TouchableOpacity onPress={() => this.openScreen('IPAScreen')}>
              <Image source={Images.pronounce} style={{width: imgWidth, height: getImageHeight(imgWidth, 350, 150)}}/>
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity onPress={() => this.openScreen('VocabularyScreen')}>
              <Image source={Images.vocabulary} style={{width: imgWidth, height: getImageHeight(imgWidth, 350, 150)}}/>
            </TouchableOpacity>
          </Card>
        </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
