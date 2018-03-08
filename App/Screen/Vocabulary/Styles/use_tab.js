import {StyleSheet} from 'react-native'
import {Metrics} from '../../../Themes/'
import variable from '../../../../native-base-theme/variables/platform';
import commonColor from '../../../../native-base-theme/variables/commonColor';
export default StyleSheet.create({
  container: {
    flex: 1
  },
  languageAudio: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  audio_group: {
    marginTop: Metrics.baseMargin
  },
  audio: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: variable.listBorderColor,
    borderRadius: 5,
    margin: Metrics.baseMargin / 2,
    padding: Metrics.baseMargin / 2
  },
  audio_btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  audio_prefix: {
    color: variable.mainBackground,
    // paddingRight: Metrics.baseMargin
  },
  audio_phonic: {
    paddingRight: Metrics.baseMargin
  },
  heading: {
    paddingLeft: Metrics.baseMargin / 2
  },
  use: {
    marginTop: Metrics.baseMargin,
    padding: Metrics.baseMargin
  },
  use_group: {
    marginBottom: Metrics.baseMargin
  },
  use_desc: {
    marginBottom: Metrics.baseMargin
  },
  eg: {
    padding: Metrics.baseMargin,
    backgroundColor: '#e8ecf2'
  },
  dot: {
    // color: commonColor.brandWarning
  }
})
