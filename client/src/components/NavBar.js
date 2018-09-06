import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setVisibilityFilter, setQuery, clearErrors } from '../actions/hikeActions'

class NavBar extends React.PureComponent {

  render() {
    return (
      <div className="navigation">
        <NavLink exact to="/" className="nav-link">Home</NavLink>
        <NavLink exact to="/hikes" className="nav-link" onClick={this.props.onClick}>All hikes</NavLink>
        <NavLink exact to="/hikes/new" className="nav-link" onClick={this.props.onClickNew}>New</NavLink>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(setVisibilityFilter("SHOW_ALL"))
    dispatch(setQuery(''))
    dispatch(clearErrors())
  },
  onClickNew: () => {
    dispatch(clearErrors())
  }
})


export default connect(null, mapDispatchToProps)(NavBar)
