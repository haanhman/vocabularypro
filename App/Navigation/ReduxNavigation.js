import React from 'react'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

// here is our redux-aware smart component
function ReduxNavigation (props) {
  // const { dispatch, nav } = props
  return <AppNavigation />
}

const mapStateToProps = (state) => {
  return {};
}
export default connect(mapStateToProps)(ReduxNavigation)
