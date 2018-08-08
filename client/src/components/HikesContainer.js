import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/hikeActions';
import Hikes from './Hikes';
import HikeForm from './HikeForm';


class HikesContainer extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     hikes: []
  //   }
  // }

componentDidMount() {
  console.log("HC mounted!")
  this.props.actions.fetchHikes()
}

onHikeClick(id) {
  // console.log("On hike clicky")
}

  render() {
    return (
      <div className="hikes-container">
        <h1>Hikes</h1>
        < Hikes
          hikes={this.props.hikes}
          onHikeClick={this.onHikeClick}
        />
        <h1>Add a new Hike</h1>
        < HikeForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.hikes.hikes)
  return {
    hikes: state.hikes.hikes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HikesContainer);
