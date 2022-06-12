import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/dashboard">
            Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/question">
            Questions
        </NavLink>
      </li>
      <li>
        <NavLink to="/new">
            New Question
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;