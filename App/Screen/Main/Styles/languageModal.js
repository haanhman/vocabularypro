import {StyleSheet} from 'react-native'
import variable from '../../../../native-base-theme/variables/platform';
import {Metrics} from '../../../Themes';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  list: {
    height: Metrics.screenHeight/3 * 2,
    width: Metrics.screenWidth/2,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10
  }
})
