import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../../Themes'
import commonColor from '../../../../native-base-theme/variables/commonColor'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow
  },
  row: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: commonColor.listBorderColor,
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin/2
  },
  name: {
    fontWeight: 'bold'
  }
})
