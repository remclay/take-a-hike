import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHikes } from '../actions/hikeActions';
import VisibleHikes from './VisibleHikes';
import HikeSearch from '../components/HikeSearch';
import Footer from '../components/Footer';


class HikesContainer extends Component {

  componentDidMount() {
    console.log("HC mounted!")
    this.props.fetchHikes()
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

export default connect(mapStateToProps, { fetchHikes })(HikesContainer);
