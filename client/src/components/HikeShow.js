import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Hike from './Hike';
import { deleteHike, fetchHikes } from '../actions/hikeActions';

class HikeShow extends React.Component {

  componentDidMount() {
    if (!this.props.hikes.length) {
      console.log("Fetching hikes")
      this.props.fetchHikes()
    }
  }

  handleDelete = () => {
    this.props.deleteHike(this.props.hike);
    this.props.history.push('/hikes')
  }

  render() {
    return (
      <div className="hikes-show-container">
        { this.props.hike.id &&
        <div>
          < Hike
            key={this.props.hike.id}
            {...this.props.hike}
            display="single"
          />
          <Link to={`/hikes/${this.props.hike.id}/edit`} className="editButton">Edit</Link>
          <span className="deleteButton" onClick={() => { if (window.confirm("Are you sure you want to delete this hike?")) this.handleDelete() }}>Delete</span>
        </div>
        }
        { !this.props.hike.id &&
          <h3>Oops, we couldn&apos;t find that hike.</h3>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const selectedHike = state.hikes.hikes.find(h => h.id === parseInt(ownProps.match.params.id, 10));
  if (selectedHike) {
    return { hikes: state.hikes.hikes, hike: selectedHike }
  } else {
    return { hikes: state.hikes.hikes, hike: {} }
  }
}

export default connect(mapStateToProps, { fetchHikes, deleteHike })(HikeShow);
