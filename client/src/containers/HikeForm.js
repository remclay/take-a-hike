import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addHike } from '../actions/hikeActions';

class HikeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      location: '',
      difficulty: '',
      description: ''
    };
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addHike(this.state, this.props.history);
  }

  render() {
    return(
      <div className="new-hike-container">
        <h1>Add a new Hike</h1>
        <form className="new-hike" onSubmit={this.handleSubmit}>
          <label>Name: </label><input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
          <label> Location: </label><input type="text" name="location" onChange={this.handleChange} value={this.state.location}/><br></br><br></br>
          <label>Difficulty: </label><select value={this.state.difficulty} name="difficulty" onChange={(event) => this.handleChange(event)}>
            <option value="Placeholder">--</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
          </select>
          <label> Description: </label><input type="text" name="description" onChange={this.handleChange} value={this.state.description}/><br></br><br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addHike })(HikeForm);
