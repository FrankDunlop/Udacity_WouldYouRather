import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Logout extends Component {
  componentWillUnmount() {
      this.props.dispatch(setAuthedUser(null))
  }

  render() {
    return <Redirect to={'/'} />
  }
}


export default connect()(Logout);