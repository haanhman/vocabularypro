import React, {Component} from 'react'
import {Modal, TouchableOpacity} from 'react-native'
import {Container, Text, View, Content, H2, Button} from 'native-base';
import styles from '../Styles/group_popup'
import Icon from 'react-native-vector-icons/Ionicons'
import {Metrics} from '../../../Themes'
import {chunkArray} from '../../../Lib/global'
export default class GroupModal extends Component {

  renderGroup() {
    const {groups} = this.props;
    let data = Object.assign([], groups);;
    if (data.length == 0) {
      return null;
    }
    const rowItem = 4;
    data = chunkArray(data, rowItem);
    return data.map((rows, index) => {
      return (
        <View key={index} style={rows.length == rowItem ? styles.wapper_data : styles.wapper_data2}>
          {this.renderGroupRow(rows, rows.length != rowItem)}
        </View>
      )
    });
  }

  renderGroupRow(rows, padding = false) {
    const {selectedId} = this.props;
    return rows.map((item, index) => {
      let styleWarning = item.id != selectedId;
      let styleDanger = item.id == selectedId;

      return (
        <Button
          onPress={() => {
            this.props.chooseGroup(item);
            this.props.close();
          }}
          style={[styles.wapper_data_buttom, padding ? styles.wapper_data_buttom_padding : {}]}
          key={index}
          warning={styleWarning}
          danger={styleDanger}
        >
          <Text>{item.name}</Text>
        </Button>
      )
    });
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
            <TouchableOpacity onPress={this.props.close} style={styles.closeBtn}>
              <Icon name={'ios-close-circle-outline'} size={Metrics.icons.medium} style={{color: 'white'}}></Icon>
            </TouchableOpacity>


            <View style={styles.top}>
              <H2 style={styles.top_title}>Groups</H2>
            </View>
            <View style={styles.body}>
              <Content style={styles.wapper}>
                  {this.renderGroup()}
              </Content>
            </View>
            <View style={styles.bottom}/>
          </View>
        </Modal>
      </Container>
    )
  }
}
