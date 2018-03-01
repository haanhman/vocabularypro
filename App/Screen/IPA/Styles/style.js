import {StyleSheet} from 'react-native'
import {ApplicationStyles, Fonts, Metrics, Colors} from '../../../Themes/'
import variable from '../../../../native-base-theme/variables/platform';
import commonColor from '../../../../native-base-theme/variables/commonColor'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  symbolWapper: {
    height: 80,
    marginRight: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: variable.cardBorderColor,
    borderRadius: 2
  },
  symbol: {
    ...Fonts.style.h1
  },
  heading: {
    paddingTop: variable.listItemPadding,
    paddingHorizontal: variable.listItemPadding + 5,
    flexDirection: 'row'
  },
  bold: {
    color: commonColor.brandDanger,
    fontWeight: 'bold'
  }
})
