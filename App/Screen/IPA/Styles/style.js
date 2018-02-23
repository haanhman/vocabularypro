import {StyleSheet} from 'react-native'
import {ApplicationStyles, Fonts, Metrics, Colors} from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  symbolWapper: {
    height: 60,
    marginRight: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  symbol: {
    ...Fonts.style.h1
  }
})
