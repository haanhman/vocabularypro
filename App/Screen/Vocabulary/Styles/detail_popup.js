import {StyleSheet} from 'react-native'
import {Metrics} from '../../../Themes/'
import variable from '../../../../native-base-theme/variables/platform';
import commonColor from '../../../../native-base-theme/variables/commonColor'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variable.mainBackground,
    padding: 10
  },
  wapper: {
    backgroundColor: 'white',
    borderRadius: 5,
    flex: 1
  },
  closeBtn: {
    position: 'absolute',
    zIndex: 999,
    top: Metrics.baseMargin,
    right: Metrics.baseMargin,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  name: {
    color: 'white',
    marginRight: Metrics.baseMargin
  },
  wordType: {
    marginTop: 5,
    color: commonColor.brandDanger
  },
  body: {
    flex: 12
  }
})
