import React, {Component} from 'react'
import {Modal, TouchableOpacity} from 'react-native'
import {Text, View, Container, Content} from 'native-base';
import {connect} from 'react-redux'
import styles from '../Styles/languageModal'
import LanguageItem from './LanguageItem'
class LanguageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: require('../../../Assets/languages.json')
    }
  }

  componentDidMount() {
    console.log(this.state.languages);
  }

  renderLanguageItems() {
    const {languages} = this.state;
    return languages.map((item, index) => {
      return <LanguageItem key={index} item={item} />
    });
  }

  render() {
    return (

      <Modal animationType={'slide'} transparent={true} visible={this.props.visible} onRequestClose={() => {
        }}>
        <View style={styles.bg}>
          <View style={styles.list}>
            {this.renderLanguageItems()}
          </View>
        </View>
      </Modal>

    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageModal)
