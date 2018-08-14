import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/hikeActions';
import VisibleHikes from '../containers/VisibleHikes';
import HikeForm from './HikeForm';
import HikeSearch from './HikeSearch';
import Footer from './Footer';


class HikesContainer extends Component {

componentDidMount() {
  console.log("HC mounted!")
  this.props.actions.fetchHikes()
}

  render() {
    return (
      <div className="hikes-container"><br></br>
        < HikeSearch />
        < Footer />
        < VisibleHikes hikes={this.props.hikes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hikes: state.hikes.hikes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HikesContainer);
