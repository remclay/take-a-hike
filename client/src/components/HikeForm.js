import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addHike } from '../actions/hikeActions';

class HikeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      location: '',
      difficulty: ''
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
    this.props.addHike(this.state);
    // clear fields after submission
  }

  render() {
    return(
      <div>
        <form className="new-hike" onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name" onChange={(event) => this.handleChange(event)} value={this.state.name}/><br></br>
          Location: <input type="text" name="location" onChange={(event) => this.handleChange(event)} value={this.state.location}/><br></br>
          Difficulty: <input type="text" name="difficulty" onChange={(event) => this.handleChange(event)} value={this.state.difficulty}/><br></br>
          <input type="submit"/>
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default connect(null, { addHike })(HikeForm);
