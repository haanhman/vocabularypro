import React from 'react'
import {View, FlatList} from 'react-native'
import {Text, ListItem, Body, CheckBox} from 'native-base'
import {connect} from 'react-redux'
import {StyleProvider} from 'native-base';
// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from '../Styles/LanguageItemStyle'
class LanguageItem extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  chooseLanguage(item) {
    this.props.switchLanguage(item.code);
  }

  render() {
    const {item} = this.props;
    const checked = item.code == this.props.currentLanguage;
    return (
      <StyleProvider style={styles}>
        <ListItem button onPress={() => this.chooseLanguage(item)}>
          <CheckBox onPress={() => this.chooseLanguage(item)} color={checked ? '#0580ff' : 'gray'} checked={checked}/>
          <Body>
          <Text checked={checked} textLang>{item.lang}</Text>
          </Body>
        </ListItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(LanguageItem)
