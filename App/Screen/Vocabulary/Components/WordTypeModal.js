import React, {Component} from 'react'
import {Modal, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import {Container, Card, Text, View, Button, Icon, Header, Left, Right, Body, Title, CardItem, H2} from 'native-base';
import styles from '../Styles/word_type_popup'
import {ucFirst} from '../../../Lib/global'
import {Metrics} from '../../../Themes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import commonColor from '../../../../native-base-theme/variables/commonColor'
export default class WordTypeModal extends Component {



  renderWordClasses() {
    const {items, selectedId} = this.props;
    if(items.length == 0) {
      return 0;
    }
    return items.map((item, index) => {
      const json = JSON.parse(item.description);
      return (
        <Card key={index}>
          <CardItem header>
            <Left style={{flex: 4}}>
              <H2>{ucFirst(item.name)}</H2>
            </Left>
            <Right style={{flex: 1}}>
              <TouchableOpacity onPress={() => {
                this.props.chooseType(item);
                this.props.close();
              }}>
                <MaterialCommunityIcons name={item.id == selectedId ? 'filter' : 'filter-outline'} size={Metrics.icons.medium} color={item.id == selectedId ? commonColor.brandDanger : 'gray'} />
              </TouchableOpacity>
            </Right>

          </CardItem>
          <CardItem>
            <Body>
            <Text style={styles.descciption}>{json.desc}</Text>
            {this.renderSample(json.sample)}
            </Body>
          </CardItem>
        </Card>
      )
    })
  }

  renderSample(sample = []) {
    if(sample.length == 0) {
      return null;
    }
    return (
      <View style={styles.sample}>
        {
          sample.map((item, index) => {
            return (
              <Text key={index}>{item}</Text>
            )
          })
        }
      </View>
    )
  }

  render() {
    if(!this.props.visible) {
      return null;
    }

    return (
      <Container>
        <Modal animationType={'slide'} transparent={true} visible={this.props.visible} onRequestClose={() => {
        }}>
          <View style={styles.container}>

            <Header>
              <Left style={{flex: 1}}>
                <Button onPress={this.props.close} transparent>
                  <Icon name='arrow-back' style={{color: 'white'}}/>
                </Button>
              </Left>
              <Body style={{flex: 8, alignItems: 'flex-start'}}>
              <Title style={{color: 'white'}}>Word classes</Title>
              </Body>
            </Header>

            <ScrollView>{this.renderWordClasses()}</ScrollView>
          </View>
        </Modal>
      </Container>
    )
  }
}
