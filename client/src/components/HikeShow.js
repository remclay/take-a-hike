import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Hike from './Hike';
import { deleteHike } from '../actions/hikeActions';

const HikeShow = (props) => {

  const handleDelete = () => {
    props.deleteHike(props.hike)
    props.history.push('/hikes')
  }

  return (
    <div className="hikes-show-container">
      < Hike
        key={props.hike.id}
        {...props.hike}
        display="single"
      />
      {!props.hike.id &&
        <p>"Oops, we couldn't find that hike."</p>
      }
      <Link to={`/hikes/${props.hike.id}/edit`} className="editButton">Edit</Link>
      <span className="deleteButton" onClick={() => { if (window.confirm("Are you sure you want to delete this hike?")) handleDelete() }}>Delete</span>
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

export default connect(mapStateToProps, { deleteHike })(HikeShow);
