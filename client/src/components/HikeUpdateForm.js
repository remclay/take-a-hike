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
      difficulty: this.props.hike.difficulty
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
    console.log("Handling submit")
    this.props.updateHike(this.state);
    this.props.history.push(`/hikes/${this.props.hike.id}`)
  }

  render() {
    return(
      <div>
        <form className="edit-hike" onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name" onChange={(event) => this.handleChange(event)} value={this.state.name}/><br></br>
          Location: <input type="text" name="location" onChange={(event) => this.handleChange(event)} value={this.state.location}/><br></br>
          Difficulty: <input type="text" name="difficulty" onChange={(event) => this.handleChange(event)} value={this.state.difficulty}/><br></br>
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