import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import {Container, Content, StyleProvider} from 'native-base';
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/style'
import {Metrics} from '../../Themes'
const ipaData = require('../../Assets/IPA/data.json');
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import CardItemStyle from '../../../native-base-theme/components/CardItem';
import Group from './Components/Group'
class IPAScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      CardItemWidth: 0
    }
  }

  componentDidMount() {
    const style = CardItemStyle();
    let padding = material.deviceWidth - ((style.padding + style.paddingVertical) * 2);
    padding -= Metrics.baseMargin * 3;
    this.setState({CardItemWidth: padding / 4});
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <ScrollView>
          <Container>
            <Content>
              {
                ipaData.map((item, index) => {
                  return (
                    <Group key={index} item={item} soundWidth={this.state.CardItemWidth} />
                  )
                })
              }
            </Content>
          </Container>
        </ScrollView>
      </StyleProvider>
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
