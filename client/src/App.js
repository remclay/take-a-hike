import React, { Component } from 'react';
import './App.css';
import HikesContainer from './components/HikesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Take-a-hike</h1>
        </header>
        < HikesContainer />
      </div>
    );
  }
}

export default App;
