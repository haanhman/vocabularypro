import {StyleSheet} from 'react-native'
import {Metrics} from '../../../Themes/'
// import variable from '../../../../native-base-theme/variables/platform';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02b5cc',
    padding: 10
  },
  wapper: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    color: 'white'
  },
  body: {
    flex: 4
  },
  bottom: {
    flex: 1
  },
  closeBtn: {
    position: 'absolute',
    top: Metrics.baseMargin,
    right: Metrics.baseMargin,
    zIndex: 999
  }
})
