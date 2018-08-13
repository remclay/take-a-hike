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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
    console.log(this.state)
  };

  handleSubmit = event => {
    debugger
    event.preventDefault();
    this.props.addHike(this.state);
    this.props.history.push('/hikes')
    // change redirect to hikes/:id?
  }

  render() {
    return(
      <div>
        <h1>Add a new Hike</h1>
        <form className="new-hike" onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/><br></br>
          Location: <input type="text" name="location" onChange={this.handleChange} value={this.state.location}/><br></br>
          Difficulty: <select value={this.state.difficulty} name="difficulty" onChange={(event) => this.handleChange(event)}>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
          </select>
          <br></br>
          Description: <input type="text" name="description" onChange={this.handleChange} value={this.state.description}/><br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addHike })(HikeForm);
