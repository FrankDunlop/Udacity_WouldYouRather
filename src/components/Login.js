import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    handleUserLogin = id => {
        this.props.dispatch(setAuthedUser(id))
    }

  render() {
    const { authedUser, userIds, users } = this.props;

    if (authedUser) {
      return <Redirect to={'/questions'} />
    }

    return (
      <div>
            <h3> Login </h3>
            <ul>
                {userIds.map((id) => (
                    <li key={id} onClick={() => this.handleUserLogin(id)}>
                        <div>
                            { users[id].name }
                        </div>
                    </li>
                ))}
            </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    userIds: Object.keys(users),
    users
  };
}

export default connect(mapStateToProps)(Login);