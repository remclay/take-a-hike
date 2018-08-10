import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import HikeSearch from './HikeSearch';

// later move to css file
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const activeLink = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'green',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => (
  <div className="navigation">
    <NavLink to="/hikes" exact style={link} activeStyle={activeLink}>All</NavLink>
    <NavLink to="/hikes" exact style={link} activeStyle={activeLink}>All hikes</NavLink>
    <NavLink to="/hikes/new" exact style={link} activeStyle={activeLink}>New</NavLink>
  </div>
)

export default NavBar;
