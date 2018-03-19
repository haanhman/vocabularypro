import {StyleSheet} from 'react-native'
import variable from '../../../../native-base-theme/variables/platform';
import {Metrics} from '../../../Themes';
export default StyleSheet.create({
  list: {
    width: Metrics.screenWidth/3 * 2,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    alignSelf: 'center',
  },
  bg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    justifyContent: 'center',
  }
})
