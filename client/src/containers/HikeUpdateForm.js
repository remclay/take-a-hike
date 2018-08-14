import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../actions/hikeActions';
import { updateHike } from '../actions/hikeActions';

class HikeUpdateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.hike.id,
      name: this.props.hike.name,
      location: this.props.hike.location,
      difficulty: this.props.hike.difficulty,
      description: this.props.hike.description
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Handling submit")
    this.props.updateHike(this.state);
    this.props.history.push(`/hikes/${this.props.hike.id}`)
  }

  render() {
    return(
      <div className="update-hike-container">
        <h1>Edit Hike</h1>
        <form className="edit-hike" onSubmit={this.handleSubmit}>
          <label>Name: </label><input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
          <label> Location: </label><input type="text" name="location" onChange={this.handleChange} value={this.state.location}/><br></br><br></br>
          <label>Difficulty: </label><select value={this.state.difficulty} name="difficulty" onChange={(event) => this.handleChange(event)}>
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

const mapStateToProps = (state, ownProps) => {
  const selectedHike = state.hikes.hikes.find(h => h.id === parseInt(ownProps.match.params.id, 10));
  if (selectedHike) {
    return { hike: selectedHike}
  } else {
    return { hike: {} }
  }
}

export default connect(mapStateToProps, { updateHike })(HikeUpdateForm);
