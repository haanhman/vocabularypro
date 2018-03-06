import {StyleSheet} from 'react-native'
import {Metrics} from '../../../Themes/'
import variable from '../../../../native-base-theme/variables/platform';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  closeBtn: {
    position: 'absolute',
    zIndex: 999,
    top: Metrics.baseMargin,
    right: Metrics.baseMargin,
  },
  wapper: {
    backgroundColor: 'white',
    borderRadius: 5
  },
  descciption: {

  },
  sample: {
    paddingLeft: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin
  }
})
