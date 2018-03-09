import {StyleSheet} from 'react-native'
import {Metrics} from '../../../Themes/'
import variable from '../../../../native-base-theme/variables/platform';
import commonColor from '../../../../native-base-theme/variables/commonColor';
export default StyleSheet.create({
  caption: {
    flex: 1,
    padding: Metrics.baseMargin
  },
  subtitle: {
    fontWeight: 'bold'
  }
})
