import React, {Component} from "react";
import {TouchableOpacity} from "react-native";
import {Container, Card, View, Content} from "native-base";
import {Image} from 'react-native';
import {connect} from "react-redux";
import {Images} from '../../Themes';
import {getImageWidth} from '../../Lib/global'
import styles from './Styles/style'
class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  openIPAScreen() {
    this.props.navigation.navigate('IPAScreen');
  }

  render() {
    return (
      <Container>
        <Content>

            <Card style={styles.cardIPA}>
              <TouchableOpacity onPress={() => this.openIPAScreen()}>
                <Image source={Images.pronounce} style={{height: 150, width: getImageWidth(150, 300, 150)}}/>
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
