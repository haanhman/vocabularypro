import React from 'react'
import { FlatList, Image } from 'react-native'
import { View, Content, Text } from 'native-base'
import { connect } from 'react-redux'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from '../Styles/ListGroupStyle'
import { ProgressCircle }  from 'react-native-svg-charts'

class ListGroup extends React.PureComponent {

  renderRow ({item}) {
    return (
      <View style={styles.row}>
        <View style={styles.bgInner}>
          <ProgressCircle
            style={ { height: 200 } }
            progress={ 0.7 }
            progressColor={'rgb(134, 65, 244)'}
          />
          <Image source={require('../../../Images/boy.png')} style={styles.thumbnail} />
          <Text>{item.name}</Text>
        </View>
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
      <Content style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.props.groups}
          renderItem={(item) => this.renderRow(item)}
          numColumns={2}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListGroup)
