import React, {Component} from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Text, Left, Right, Content } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import commonColor from '../../../../native-base-theme/variables/commonColor'
import {Metrics} from '../../../Themes'

// Styles
import styles from '../Styles/VocabularyListStyle'

class VocabularyList extends Component {

  defaultState = {
    items: [],
    offset: 0
  }

  constructor(props) {
    super(props);
    this.state = {...this.defaultState};
  }


  componentDidMount() {
    this.onEndReached();
  }


  onEndReached() {
    let offset = this.state.offset + 100;
    if(offset >= this.props.words.length) {
      offset = this.props.words.length;
    }
    this.setState({offset, items: this.props.words.slice(0, offset)});
  }

  renderRow ({item}) {
    return (
      <View style={styles.row}>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {this.props.selectVocabulary(item)}}>
          <Left style={{flex: 3}}>
            <Text style={styles.name}>{item.name}</Text>
            {
              item.phonic_us ? (<Text>/{item.phonic_us}/</Text>) : null
            }
          </Left>
          <Right style={{flex: 2, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text>{item.word_type}</Text>
            <MaterialIcons name='play-arrow' size={Metrics.icons.small} color={commonColor.brandDanger} />
          </Right>
        </TouchableOpacity>
      </View>
    )
  }

  keyExtractor = (item, index) => index

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          onEndReached={() => this.onEndReached()}
          onEndReachedThreshold={0.01}
          contentContainerStyle={styles.listContent}
          data={this.state.items}
          renderItem={(item) => this.renderRow(item)}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VocabularyList)
