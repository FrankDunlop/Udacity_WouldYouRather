import React, { Component } from 'react'
import { connect } from 'react-redux'

class Avatar extends Component {
    render(){
        const user = this.props.user
        return (
            <div id='avatar'>
                <img  alt='pic' width="80" height="80" src={'/images/'+ user.avatarURL}/>
                <div>Welcome {user ? user.name : '' }</div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users}) {
    const user = users[authedUser]

    return {
        user
  }
}

export default connect(mapStateToProps)(Avatar)