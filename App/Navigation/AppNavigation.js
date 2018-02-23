import { StackNavigator } from 'react-navigation'
import IPAScreen from '../Screen/IPA/IPAScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  IPAScreen: { screen: IPAScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'IPAScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
