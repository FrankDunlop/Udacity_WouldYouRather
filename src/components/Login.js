import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

  render() {
    const { userIds, users } = this.props;
    console.log(this.props)
    return (
      <div>
            <h3> Login </h3>
            <ul>
                {userIds.map((id) => (
                    <li key={id}>
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

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
    users
  };
}

export default connect(mapStateToProps)(Login);