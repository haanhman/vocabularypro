import {StyleSheet} from 'react-native'
import {Metrics} from '../../../Themes'
import commonColor from '../../../../native-base-theme/variables/commonColor'
export default StyleSheet.create({
  buttonFunction: {
    flexDirection: 'row',
    marginVertical: Metrics.baseMargin
  },
  smallButton: {
    flexDirection: 'row',
    marginHorizontal: Metrics.baseMargin
  },
  smallButton_Icon: {
    color: commonColor.brandDanger,
    marginRight: Metrics.baseMargin / 2
  }
})
