import React, {Component} from 'react'
import {ScrollView, TouchableOpacity} from 'react-native'
import {Container, Content, Header, Title, Left, Body, Icon, Button} from 'native-base';
import {connect} from 'react-redux'


import {Metrics} from '../../Themes'
const ipaData = require('../../Assets/IPA/data.json');
import CardItemStyle from '../../../native-base-theme/components/CardItem';
import Group from './Components/Group'
import IPAModal from './IPAModal'
class IPAScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      CardItemWidth: 0,
      playGroup: null,
      play: false
    }
  }

  componentDidMount() {
    const style = CardItemStyle();
    let padding = Metrics.screenWidth - ((style.padding + style.paddingVertical) * 2);
    padding -= Metrics.baseMargin * 3;
    this.setState({CardItemWidth: padding / 4});
  }

  playGroup(group) {
    this.setState({playGroup: group, play: true});
  }

  closeModal() {
    this.setState({playGroup: null, play: false});
  }

  backAction() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <Header>
            <Left style={{flex: 1}}>
              <Button onPress={() => this.backAction()} transparent>
                <Icon name='arrow-back' style={{color: 'white'}}/>
              </Button>
            </Left>
            <Body style={{flex: 8, alignItems: 'flex-start'}}>
              <Title style={{color: 'white'}}>International Phonetic Alphabet</Title>
            </Body>
          </Header>
          <Content>
            {
              ipaData.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => this.playGroup(item)}>
                    <Group item={item} soundWidth={this.state.CardItemWidth}/>
                  </TouchableOpacity>
                )
              })
            }
          </Content>
          <IPAModal close={() => this.closeModal()} group={this.state.playGroup} visible={this.state.play}/>
        </Container>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(IPAScreen)
