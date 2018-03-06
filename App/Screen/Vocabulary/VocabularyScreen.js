import React, {Component} from 'react'
import {View, Container, Content, Header, Title, Left, Body, Button, Text, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

import GroupModel from '../../Entities/GroupModel'
import WordTypeModel from '../../Entities/WordTypeModel'
import WordModel from '../../Entities/WordModel'
import GroupModal from './Components/GroupModal'
import WordTypeModal from './Components/WordTypeModal'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Metrics} from '../../Themes'
import styles from './Styles/style'
import {ucFirst} from '../../Lib/global'

class VocabularyScreen extends Component {
  groupModel = null;
  wordTypeModel = null;
  wordModel = null;
  constructor(props) {
    super(props);
    this.state = {
      showGroup: false,
      showWordType: false,
      groups: [],
      words: [],
      wordType: [],
      selectedGroup: {id: 0, name: "All Groups"},
      selectedType: {id: 0, name: "Word classes"},
    }
    this.groupModel = new GroupModel();
    this.wordTypeModel = new WordTypeModel();
    this.wordModel = new WordModel();
  }

  componentDidMount() {
    this.groupModel.getAllGroups((results) => {
      this.setState({groups: results.concat([{id: 0, name: "All Groups"}])});
    });
    this.wordTypeModel.getAllType((results) => {
      this.setState({wordType: results});
    });
    this.getAllWord();
  }

  getAllWord() {
    this.wordModel.getAllWord(this.state.selectedGroup.id, this.state.selectedType.id, (results) => {
      console.log(results.length);
    });
  }

  backAction() {
    this.props.navigation.goBack();
  }

  chooseGroup(item) {
    this.setState({selectedGroup: item});
    console.log('choose group: ' + JSON.stringify(item));
    setTimeout(() => {
      this.getAllWord();
    }, 500);
  }

  chooseType(item) {
    this.setState({selectedType: item});
    console.log('choose type: ' + JSON.stringify(item));
    setTimeout(() => {
      this.getAllWord();
    }, 500);
  }

  showGroupModal(status = true) {
    this.setState({showGroup: status});
  }

  showWordTypeModal(status = true) {
    this.setState({showWordType: status});
  }

  render() {
    return (
      <Container>
        <Header>
          <Left style={{flex: 1}}>
            <Button onPress={() => this.backAction()} transparent>
              <Icon name='arrow-back' style={{color: 'white'}}/>
            </Button>
          </Left>
          <Body style={{flex: 8, alignItems: 'flex-start'}}>
          <Title style={{color: 'white'}}>Vocabulary</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.buttonFunction}>
            <TouchableOpacity onPress={() => this.showGroupModal(true)} style={styles.smallButton}>
              <Entypo name={'folder'} size={Metrics.icons.small} style={styles.smallButton_Icon} />
              <Text>{this.state.selectedGroup.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.showWordTypeModal(true)} style={styles.smallButton}>
              <MaterialCommunityIcons name={'format-list-bulleted-type'} size={Metrics.icons.small} style={styles.smallButton_Icon} />
              <Text>{ucFirst(this.state.selectedType.name)}</Text>
            </TouchableOpacity>
          </View>
        </Content>
        <GroupModal
          chooseGroup={(item) => this.chooseGroup(item)}
          close={() => this.showGroupModal(false)}
          groups={this.state.groups}
          selectedId={this.state.selectedGroup.id}
          visible={this.state.showGroup}/>
        <WordTypeModal
          chooseType={(item) => this.chooseType(item)}
          close={() => this.showWordTypeModal(false)}
          items={this.state.wordType}
          selectedId={this.state.selectedType.id}
          visible={this.state.showWordType}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(VocabularyScreen)
