import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setVisibilityFilter, setQuery } from '../actions/hikeActions'

const NavBar = ({ onClick }) => (
  <div className="navigation">
    <NavLink to="/" exact className="nav-link" activeClassName="active-nav-link">Home</NavLink>
    <NavLink to="/hikes" exact className="nav-link" activeClassName="active-nav-link" onClick={onClick}>All hikes</NavLink>
    <NavLink to="/hikes/new" exact className="nav-link" activeClassName="active-nav-link">New</NavLink>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(setVisibilityFilter("SHOW_ALL")),
    dispatch(setQuery(''))
  }
})


export default connect(null, mapDispatchToProps)(NavBar)
