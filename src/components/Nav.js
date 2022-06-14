import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

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
        <NavLink to='/' exact onClick={handleUserLogout}>
            Logout
        </NavLink>
      </li>
    </ul>
  );
};

const handleUserLogout = id => {
  this.props.dispatch(setAuthedUser(id))
}

export default connect()(Navigation)