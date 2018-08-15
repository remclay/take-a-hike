import React from 'react';
import { NavLink } from 'react-router-dom';

// later move to css file
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'white',
  textDecoration: 'none',
  color: 'black',
}

const activeLink = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'white',
  textDecoration: 'underline',
  color: 'black',
}

const NavBar = () => (
  <div className="navigation">
    <NavLink to="/" exact style={link} activeStyle={activeLink}>Home</NavLink>
    <NavLink to="/hikes" exact style={link} activeStyle={activeLink}>All hikes</NavLink>
    <NavLink to="/hikes/new" exact style={link} activeStyle={activeLink}>New</NavLink>
  </div>
)

export default NavBar;
