import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Hike from './Hike';

const HikeShow = (props) => {
  return (
    <div className="hikes-container">
      <h1>Hike</h1>
      < Hike
        key={props.hike.id}
        {...props.hike}
      />
      {!props.hike.id &&
        <p>"Oops, we couldn't find that hike."</p>
      }
      <Link to={`/hikes/${props.hike.id}/edit`}>Edit hike</Link>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const selectedHike = state.hikes.hikes.find(h => h.id === parseInt(ownProps.match.params.id, 10));
  if (selectedHike) {
    return { hike: selectedHike}
  } else {
    return { hike: {} }
  }
}

export default connect(mapStateToProps)(HikeShow);
