import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setVisibilityFilter, setQuery } from '../actions/hikeActions'

class NavBar extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="navigation">
        <NavLink exact to="/" className="nav-link" activeClassName="active-nav-link">Home</NavLink>
        <NavLink exact to="/hikes" className="nav-link" activeClassName="active-nav-link" onClick={this.props.onClick}>All hikes</NavLink>
        <NavLink exact to="/hikes/new" className="nav-link" activeClassName="active-nav-link">New</NavLink>
      </div>

    )
  }
}
// const NavBar = ({ onClick }) => (
//   <div className="navigation">
//     <NavLink exact to="/" className="nav-link" activeClassName="active-nav-link">Home</NavLink>
//     <NavLink exact to="/hikes" className="nav-link" activeClassName="active-nav-link" onClick={onClick}>All hikes</NavLink>
//     <NavLink exact to="/hikes/new" className="nav-link" activeClassName="active-nav-link">New</NavLink>
//   </div>
// )

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(setVisibilityFilter("SHOW_ALL"))
    dispatch(setQuery(''))
  }
})


export default connect(null, mapDispatchToProps)(NavBar)
