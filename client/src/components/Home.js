import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import HikeSearch from './HikeSearch';
import HikesContainer from './HikesContainer';

class Home extends Component {

  render() {
    return (
      <div className="home-container">
        <h1>Welcome to Take-a-hike</h1>
        <p><Link to={`/hikes`}>Browse all hikes</Link></p>
        <p>Search: < HikeSearch /></p>
        <p>Browse by location: </p>
        <p>Can't find what you're looking for? <Link to={`/hikes/new`}>Add a new hike</Link></p>
      </div>
    );
  }
}

export default Home
