import React, {Component} from 'react'
import {ScrollView, View} from 'react-native'
import {Container, Card, Text, CardItem, Content} from 'native-base';
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/style'
import {Metrics} from '../../Themes'
const ipaData = require('../../Assets/IPA/data.json');

class IPAScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      CardItemWidth: 0
    }
  }
  onPageLayout = (event) => {
    if(this.state.CardItemWidth > 0) {
      return;
    }
    const {width} = event.nativeEvent.layout;
    this.setState({CardItemWidth: (width + 8) - Metrics.baseMargin*3});
    console.log('CardItemWidth: ' + ((width + 8) - Metrics.baseMargin*3));
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <Content>
            {
              ipaData.map((item, index) => {
                return (
                  <Card key={index}>
                    <CardItem onLayout={this.onPageLayout}>
                      <Text>{item.group}</Text>
                    </CardItem>
                    <CardItem style={{flexWrap: 'wrap'}}>
                      {
                        item.sounds.map((sound, soundKey) => {
                          return (
                            <View key={soundKey} style={[
                              styles.symbolWapper,
                              {width: (this.state.CardItemWidth-8)/4},
                              ((soundKey + 1)  % 4 == 0) ? {marginRight: 0} : {}
                            ]}>
                              <Text style={styles.symbol}>{sound.symbol}</Text>
                            </View>
                          )
                        })
                      }
                    </CardItem>
                  </Card>
                )
              })
            }
          </Content>
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
