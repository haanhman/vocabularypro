import { StackNavigator } from 'react-navigation'
import IPAScreen from '../Screen/IPA/IPAScreen'
import MainScreen from '../Screen/Main/MainScreen'
import VocabularyScreen from '../Screen/Vocabulary/VocabularyScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  VocabularyScreen: { screen: VocabularyScreen },
  IPAScreen: { screen: IPAScreen },
  MainScreen: { screen: MainScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
