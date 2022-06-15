import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = { 
    userId: ''
  }

  LoginUser = () => {
    this.props.dispatch(setAuthedUser(this.state.userId === '' ? this.props.userIds[0] : this.state.userId))
  }

  render() {
    const { authedUser, userIds, users } = this.props

    if (authedUser) {
      return <Redirect to={'/questions'} />
    }
  
    const handleChange = (e) => {
        let userId = e.target.value
        this.setState(() => ({
          userId: userId
        }))
    }

    return (
      <div>
            <h3> Login </h3>
            <div>
              <select onChange={handleChange}>
                {userIds.map((id, i) => 
                  <option key={i} value={id}>{users[id].name}</option>
                )}
              </select>
            </div>
            <button onClick={this.LoginUser}>Login</button>
      </div>
    )
  }
}


function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    userIds: Object.keys(users),
    users
  }
}

export default connect(mapStateToProps)(Login);