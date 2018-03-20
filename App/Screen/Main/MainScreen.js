import React, {Component} from "react";
import {Container, Header, Body, Title, TabHeading, Icon, Text, Tabs, Tab, Left, Right} from "native-base";
import {Image, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import styles from './Styles/style'
import IPAScreen from '../IPA/IPAScreen'
import GroupModel from '../../Entities/GroupModel'
import ListGroup from './Components/ListGroup'
import LanguageModal from './Components/LanguageModal'
import {languagePopup} from '../../Redux/Actions/VocabularyAction'
import Entypo from 'react-native-vector-icons/Entypo'
import {Metrics} from '../../Themes'

class MainScreen extends Component {

  groupModel = null;
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    }
    this.groupModel = new GroupModel();
  }

  componentDidMount() {
    this.groupModel.getAllGroups((results) => {
      // console.log(results);
      this.setState({groups: results});
    })
  }

  openScreen(screenName) {
    this.props.navigation.navigate(screenName);
  }

  showLanguagePopup() {
    this.props.languagePopup(true)
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body style={{flex: 1}}>
            <Title style={{color: 'white'}}>Vocabulary</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={() => this.showLanguagePopup()}>
              <Entypo name="language" size={Metrics.icons.small} color="white" />
            </TouchableOpacity>
          </Right>
        </Header>

        <Tabs>
          <Tab heading={ <TabHeading><Icon name="ios-bookmark-outline" /><Text>bookmark</Text></TabHeading>}>
            <ListGroup lang={this.props.currentLanguage} groups={this.props.currentLanguage.length > 0 ? this.state.groups : []} />
          </Tab>
          <Tab style={{paddingTop: 10}} heading={ <TabHeading><Icon name="md-walk" /><Text>Camera</Text></TabHeading>}>
            <IPAScreen />
          </Tab>
        </Tabs>
        <LanguageModal close={() => this.closeLanguageModal()} visible={this.props.languagePopupVisible}/>
      </Container>
    )
  }

  closeLanguageModal() {
    this.props.languagePopup(false);
  }
}

const mapStateToProps = (state) => {
  return {
    currentLanguage: state.vocabulary.language,
    languagePopupVisible: state.vocabulary.languagePopupVisible,
  }
}

export default connect(mapStateToProps, {languagePopup})(MainScreen)
