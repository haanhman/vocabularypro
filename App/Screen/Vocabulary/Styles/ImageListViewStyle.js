import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.snow
  },
  row: {
    flex: 1
  }
})
