import React, { Component } from 'react';

class LikesButton extends Component {

  render() {
    return (
      <button onClick={this.props.handleClick}>
        Likes - {this.props.likes}
      </button>
    )
  }
}

export default LikesButton;
