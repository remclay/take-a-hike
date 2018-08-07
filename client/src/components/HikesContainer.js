import React, { Component } from 'react';

class HikesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hikes: []
    }
  }

  componentDidMount() {
    fetch('/hikes')
    .then(response =>{
      console.log(response)
      this.setState({
        hikes: response.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="hikes-container">
          <h1>Hikes:</h1>
          <p>{this.state.hikes}</p>
      </div>
    );
  }
}

export default HikesContainer;
