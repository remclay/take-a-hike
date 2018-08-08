import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/hikeActions';

class HikesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hikes: []
    }
  }

componentDidMount() {
  console.log("HC mounted!")
  this.props.actions.fetchHikes()
}

  render() {
    return (
      <div className="hikes-container">
          <h1>Hikes:</h1>
          <p>{this.props.hikes.map(hike => <p>{hike.name}</p>)}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.hikes.hikes)
  return {
    hikes: state.hikes.hikes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HikesContainer);
