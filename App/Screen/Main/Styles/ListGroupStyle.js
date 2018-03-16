import {StyleSheet} from 'react-native'
import {Metrics, Colors} from '../../../Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: '#e1e9ea'
  },
  row: {
    backgroundColor: Colors.snow,
    flex: 1,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    margin: 20,
    padding: 3,
    borderRadius: 10
  },
  chart: {
    position: 'absolute',
    // top: 0,
    // left: 0,
    width: 120,
    height: 120
  },
  ProgressCircle: {
    height: 120,
  },
  bgInner: {
    flex: 1,
    backgroundColor: '#f7f8f4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnail: {
    marginTop: 20,
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.snow
  },
  groupName: {
    padding: Metrics.baseMargin,
    textAlign: 'center',
    padding: 0
  },
  static: {
    color: '#81817f',
    textAlign: 'center',
  }
})
