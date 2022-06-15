import React, { Component } from 'react'

class UserScores extends Component {
    render() {
        const user = this.props.user

        return (
            <div >
                <img  alt='pic' src={'/images/'+ user.avatarURL}/>
                <div>{user.name} scored {Object.keys(user.answers).length + Object.keys(user.questions).length}</div>
                <div>Answered {Object.keys(user.answers).length} Questions</div>
                <div>Asked {Object.keys(user.questions).length} Questions</div>
            </div >
        )
    }
}

export default UserScores