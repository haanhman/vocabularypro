import {StyleSheet} from 'react-native'
import {Metrics, Fonts} from '../../../Themes/'
import variable from '../../../../native-base-theme/variables/platform';
import commonColor from '../../../../native-base-theme/variables/commonColor';
export default StyleSheet.create({
  caption: {
    flex: 1,
    padding: Metrics.baseMargin,
    backgroundColor: '#feffcc'
  },
  subtitle: {
    fontSize: Fonts.size.input,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: Metrics.baseMargin
  },
  bottomFunction: {
    padding: Metrics.baseMargin
  },
  staticVideo: {
    paddingBottom: Metrics.baseMargin
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
  }
})
