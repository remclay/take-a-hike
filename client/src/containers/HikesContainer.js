import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHikes } from '../actions/hikeActions';
import VisibleHikes from './VisibleHikes';
import HikeSearch from '../components/HikeSearch';
import Footer from '../components/Footer';
import Errors from '../components/Errors';


class HikesContainer extends Component {

  componentDidMount() {
    console.log("HC mounted!")
    this.props.fetchHikes()
  }

  render() {
    return (
      <div>
        {this.props.errors.length === 0 &&
          <div className="hikes-container"><br></br>
            < HikeSearch />
            < Footer />
            < VisibleHikes hikes={this.props.hikes} />
          </div>
        }

        {this.props.errors.length > 0 &&
          <div className="errors-container">
            < Errors messages={this.props.errors[0]} />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hikes: state.hikes.hikes,
    loading: state.hikes.loading,
    errors: state.hikes.errors
  }
}

export default connect(mapStateToProps, { fetchHikes })(HikesContainer);
