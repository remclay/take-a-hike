import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchHikes } from '../actions/hikeActions';
import Hikes from './Hikes';

class HikeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.searchTerm)
    this.props.searchHikes(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <input
            className='searchTerm'
            type='text'
            placeholder='Search hikes...'
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button type="submit">Go</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {hikes: state.hikes.hikes}
}

const mapDispatchToProps = (dispatch) => {
  return {searchHikes: bindActionCreators(searchHikes, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HikeSearch);
