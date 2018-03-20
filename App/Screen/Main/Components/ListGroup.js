import React from 'react'
import {FlatList, Image} from 'react-native'
import {View, Content, Text} from 'native-base'
import {connect} from 'react-redux'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from '../Styles/ListGroupStyle'
import {ProgressCircle}  from 'react-native-svg-charts'
/*
 * <ProgressCircle
 style={styles.ProgressCircle}
 progress={ 0.7 }
 progressColor={'red'}
 />
 * */
class ListGroup extends React.PureComponent {

  renderRow({item}) {
    let rd = Math.random();
    return (
      <View style={styles.row}>
        <View style={styles.bgInner}>
          <View style={styles.chart}>
            <ProgressCircle
              style={[styles.ProgressCircle, rd <= 0.5 ? {transform: [{rotate: (36 * (rd * 10)) + 'deg'}]} : {}]}
              progress={ rd }
              progressColor={'#30ff00'}
            />
          </View>
          <Image source={require('../../../Images/boy.png')} style={styles.thumbnail}/>
        </View>
        <Text style={styles.groupName}>{item.displayName}</Text>
        <Text style={styles.static}>0/{item.total_word}</Text>
      </View>
    )
  }

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

  render() {
    const {lang} = this.props;
    let groups = Object.assign([], this.props.groups);
    groups = groups.map(item => {
      const meant = JSON.parse(item.meant);
      return {
        ...item,
        displayName: meant[lang]
      }
    })
    return (
      <Content style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={groups}
          renderItem={this.renderRow}
          numColumns={2}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
        />
      </Content>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {})(ListGroup)
