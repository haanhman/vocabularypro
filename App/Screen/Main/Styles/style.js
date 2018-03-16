import {StyleSheet} from 'react-native'
import variable from '../../../../native-base-theme/variables/platform';
export default StyleSheet.create({
  cardIPA: {
    backgroundColor: variable.mainBackground
  },
  viewTab: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 20
  }
})
