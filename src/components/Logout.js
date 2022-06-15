import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Logout extends Component {
    handleUserLogout = () => {
        this.props.dispatch(setAuthedUser(null))
        return <Redirect to={'/'} />
    }

  render() {
    return (
    <div>
        {this.handleUserLogout()}
    </div>
    )
  }
}


export default connect()(Logout);