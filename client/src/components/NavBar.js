import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="navigation">
    <NavLink to="/" exact className="nav-link" activeClassName="active-nav-link">Home</NavLink>
    <NavLink to="/hikes" exact className="nav-link" activeClassName="active-nav-link">All hikes</NavLink>
    <NavLink to="/hikes/new" exact className="nav-link" activeClassName="active-nav-link">New</NavLink>
  </div>
)

export default NavBar;
