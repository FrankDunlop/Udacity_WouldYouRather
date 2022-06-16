import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import UserScores from './UserScores'

class Leaderboard extends Component {
    render() {
        const { userIds, users } = this.props

        return (
            <div id='score'>
                <Avatar />
                <br/>
                <h2>Leaderboard</h2>
                {userIds.map((id) => (
                    <li key={id}>
                        <br/>
                        <UserScores user={users[id]} />
                    </li>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    var userIds = []

    if(users)
    {   
        userIds = Object.keys(users)
            .sort((a, b) => 
                (Object.keys(users[b]['answers']).length + Object.keys(users[b]['questions']).length) - (Object.keys(users[a]['answers']).length + Object.keys(users[a]['questions']).length)
        )
    }

    return {
        userIds,
        users
    }
}

export default connect(mapStateToProps)(Leaderboard)