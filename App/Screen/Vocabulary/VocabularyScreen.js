import React, {Component} from 'react'
import {Container, Content, Header, Title, Left, Body, Icon, Button, Text} from 'native-base';
import {connect} from 'react-redux'

class VocabularyScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  backAction() {
    this.props.navigation.goBack();
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
          <Text>Vocabulary</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(VocabularyScreen)
