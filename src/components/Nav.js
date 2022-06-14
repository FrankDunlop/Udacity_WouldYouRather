import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Navigation = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/questions">
            Questions
        </NavLink>
      </li>
      <li>
        <NavLink to="/new">
            New Question
        </NavLink>
      </li>
      <li>
        <NavLink to="/leaderboard">
            LeaderBoard
        </NavLink>
      </li>
      <li>
        <NavLink to='/logout'>
            Logout
        </NavLink>
      </li>
    </ul>
  )
}

export default connect()(Navigation)