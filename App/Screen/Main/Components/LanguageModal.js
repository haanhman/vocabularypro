import React, {Component} from 'react'
import {Modal, TouchableOpacity} from 'react-native'
import {Text, View, Container, Content} from 'native-base';
import {connect} from 'react-redux'
import styles from '../Styles/languageModal'
import LanguageItem from './LanguageItem'
import {changeLanguage} from '../../../Redux/Actions/VocabularyAction'
class LanguageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: require('../../../Assets/languages.json')
    }
  }

  componentDidMount() {
    console.log("currentLanguage: " + this.props.currentLanguage);
  }

  switchLanguage(code) {
    this.props.changeLanguage(code);
    this.props.close();
  }

  renderLanguageItems() {
    const {languages} = this.state;
    return languages.map((item, index) => {
      return <LanguageItem switchLanguage={(code) => this.switchLanguage(code)} currentLanguage={this.props.currentLanguage} key={index} item={item} />
    });
  }

  render() {
    return (
      <Modal animationType={'slide'} transparent={true} visible={this.props.visible} onRequestClose={() => this.props.close()}>
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

  return {
    currentLanguage: state.vocabulary.language
  }
}
export default connect(mapStateToProps, {changeLanguage})(LanguageModal)
