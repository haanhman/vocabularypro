import React, {Component} from 'react'
import {Modal, TouchableOpacity} from 'react-native'
import {Text, View, Container} from 'native-base';
import {connect} from 'react-redux'
import styles from '../Styles/languageModal'
import ListLanguage from './ListLanguage'
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

  render() {
    return (

      <Modal animationType={'slide'} transparent={true} visible={this.props.visible} onRequestClose={() => {
        }}>
        <Container>
          <View style={styles.container}>
            <View style={styles.list}>
              <ListLanguage languages={this.state.languages} />
            </View>
          </View>
        </Container>
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
