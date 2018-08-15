import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className="home-container">
        <h1>Welcome</h1>
        <p>No sign up necessary, while we build up our repertoire of awesome hikes!</p>
        <p><Link to={`/hikes`}>Browse all hikes, search by name, difficulty or location</Link></p>
        <p>Can't find what you're looking for? <Link to={`/hikes/new`}>Add a new hike</Link></p>
      </div>
    );
  }
}

export default Home
