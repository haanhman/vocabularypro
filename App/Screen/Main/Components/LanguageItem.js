import React from 'react'
import {View, FlatList} from 'react-native'
import {Text, ListItem, Body, CheckBox} from 'native-base'
import {connect} from 'react-redux'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from '../Styles/LanguageItemStyle'

class LanguageItem extends React.PureComponent {

  chooseLanguage(item) {
    console.log('code: ' + item.code);
  }

  render() {
    const {item} = this.props;
    return (
      <ListItem>
        <CheckBox onPress={() => this.chooseLanguage(item)}/>
        <Body>
          <Text>{item.lang}</Text>
        </Body>
      </ListItem>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageItem)
