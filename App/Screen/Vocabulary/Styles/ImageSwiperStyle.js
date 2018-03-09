import {StyleSheet} from 'react-native'
import {ApplicationStyles, Colors, Metrics} from '../../../Themes'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center'
  },
  activeDotStyle: {
    backgroundColor: Colors.dotActiveColor
  },
  dotStyle: {
    backgroundColor: Colors.dotColor
  },
  iconClose: {
    color: Colors.snow,
    backgroundColor: 'transparent'
  },
  btnClose: {
    position: 'absolute',
    width: Metrics.icons.medium,
    height: Metrics.icons.medium,
    top: 10,
    right: 10,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
