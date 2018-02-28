import {StyleSheet} from 'react-native'
import {Metrics} from '../../../Themes/'
// import variable from '../../../../native-base-theme/variables/platform';
export default StyleSheet.create({
  container: {
    flex: 1
  },
  symbol: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sample: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  symbolText: {
    fontSize: 200
  },
  sampleWord: {
    paddingHorizontal: Metrics.baseMargin
  }
})
