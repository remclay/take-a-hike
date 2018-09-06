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
    const { hikes, loading, errors } = this.props;

    return (
      <div>
        {errors.length === 0 &&
          <div className="hikes-container"><br></br>
            < HikeSearch />
            < Footer />

            {loading &&
              <h3 className="loading">Loading...</h3>
            }
            {!loading &&
              < VisibleHikes hikes={hikes} />
            }
          </div>
        }

        {errors.length > 0 &&
          < Errors messages={errors[0]} />
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
