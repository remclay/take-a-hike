import React from 'react';
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
      { props.hike.id &&
      <div>
        < Hike
          key={props.hike.id}
          {...props.hike}
          display="single"
        />
        <Link to={`/hikes/${props.hike.id}/edit`} className="editButton">Edit</Link>
        <span className="deleteButton" onClick={() => { if (window.confirm("Are you sure you want to delete this hike?")) handleDelete() }}>Delete</span>
      </div>
      }
      { !props.hike.id &&
        <h3>Oops, we couldn&apos;t find that hike.</h3>
      }
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
