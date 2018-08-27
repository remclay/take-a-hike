import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { searchHikes } from '../actions/hikeActions';
import { setQuery } from '../actions/hikeActions';

class HikeSearch extends React.Component {


  handleChange = event => {
    this.props.setQuery(event.target.value);
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <label>Search by name or location: </label>
          <input
            className='searchTerm'
            type='text'
            placeholder='Search hikes...'
            value={this.props.query}
            onChange={this.handleChange}
          />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  query: state.queryFilter
})

const mapDispatchToProps = (dispatch) => {
  return {setQuery: bindActionCreators(setQuery, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HikeSearch);
