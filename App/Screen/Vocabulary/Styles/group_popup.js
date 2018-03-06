import {StyleSheet} from 'react-native'
import {Metrics} from '../../../Themes/'
import variable from '../../../../native-base-theme/variables/platform';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variable.mainBackground,
    padding: 10
  },
  closeBtn: {
    position: 'absolute',
    zIndex: 999,
    top: Metrics.baseMargin,
    right: Metrics.baseMargin,
  },
  wapper: {
    backgroundColor: 'white',
    borderRadius: 5
  },
  wapper_data: {
    paddingHorizontal: Metrics.baseMargin,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wapper_data2: {
    paddingHorizontal: Metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  wapper_data_buttom: {
    marginTop: Metrics.baseMargin,
  },
  wapper_data_buttom_padding: {
    marginRight: Metrics.baseMargin
  },
  top: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: Metrics.baseMargin * 2
  },
  top_title: {
    color: 'white'
  },
  body: {
    flex: 2
  },
  bottom: {
    flex: 1
  }
})
