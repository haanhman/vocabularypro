import {StyleSheet} from 'react-native'
import {Metrics, Fonts} from '../../../Themes/'
import variable from '../../../../native-base-theme/variables/platform';
import commonColor from '../../../../native-base-theme/variables/commonColor';
export default StyleSheet.create({
  caption: {
    flex: 1,
    paddingVertical: Metrics.baseMargin,
    backgroundColor: '#feffcc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: Metrics.baseMargin
  },
  bottomFunction: {
    padding: Metrics.baseMargin
  },
  staticVideo: {
    paddingBottom: Metrics.baseMargin,
    textAlign: 'center'
  },
  listButtom: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    paddingHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: commonColor.listBorderColor,
    borderRadius: 3
  },
  textBack: {
    paddingLeft: 3
  },
  textNext: {
    paddingRight: 3
  },
  langVideo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: Metrics.baseMargin
  },
  flag: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: commonColor.listBorderColor,
    borderRadius: 3,
    padding: 3
  },
  flagImage: {
    width: 30,
    height: 30,
    marginRight: Metrics.baseMargin
  },
  flagActive: {
    backgroundColor: variable.mainBackground
  },
  textWhite: {
    color: 'white',
    fontWeight: 'bold'
  }
})
