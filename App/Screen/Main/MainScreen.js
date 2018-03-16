import React, {Component} from "react";
import {TouchableOpacity} from "react-native";
import {Container, Header, Body, Title, TabHeading, Icon, Text, Tabs, Tab} from "native-base";
import {Image} from 'react-native';
import {connect} from "react-redux";
import styles from './Styles/style'
import IPAScreen from '../IPA/IPAScreen'
import {Metrics} from '../../Themes'
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
    return (
      <Container>
        <Header>
          <Body style={{flex: 1}}>
            <Title style={{color: 'white'}}>Vocabulary</Title>
          </Body>
        </Header>

        <Tabs>
          <Tab style={{paddingTop: 10}} heading={ <TabHeading><Icon name="ios-bookmark-outline" /><Text>bookmark</Text></TabHeading>}>
            <Text>Noi dung tab 1</Text>
          </Tab>
          <Tab style={{paddingTop: 10}} heading={ <TabHeading><Icon name="md-walk" /><Text>Camera</Text></TabHeading>}>
            <IPAScreen />
          </Tab>
        </Tabs>

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
