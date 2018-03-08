import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Text, Left, Right } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import commonColor from '../../../../native-base-theme/variables/commonColor'
import {Metrics} from '../../../Themes'

// Styles
import styles from '../Styles/VocabularyListStyle'

class VocabularyList extends React.PureComponent {
  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  *************************************************************/
  renderRow ({item}) {
    return (
      <View style={styles.row}>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {this.props.selectVocabulary(item)}}>
          <Left style={{flex: 4}}>
            <Text style={styles.name}>{item.name}</Text>
            {
              item.phonic_us ? (<Text>/{item.phonic_us}/</Text>) : null
            }
          </Left>
          <Right style={{flex: 1}}>
            <MaterialIcons name='play-arrow' size={Metrics.icons.small} color={commonColor.brandDanger} />
          </Right>
        </TouchableOpacity>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () => null

  // Render a footer?
  renderFooter = () => null

  // Show this when data is empty
  renderEmpty = () => null

  renderSeparator = () => null

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.props.words}
          renderItem={(item) => this.renderRow(item)}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
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
