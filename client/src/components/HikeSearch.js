import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { searchHikes } from '../actions/hikeActions';
import { setQuery } from '../actions/hikeActions';

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
    }, () => {
      this.props.setQuery(this.state.searchTerm);
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  //   console.log(this.state.searchTerm)
  //   this.props.setQuery(this.state.searchTerm);
  //   this.setState({searchTerm: ''});
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
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
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
  return {setQuery: bindActionCreators(setQuery, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HikeSearch);
