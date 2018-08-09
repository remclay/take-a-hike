import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import HikesContainer from './components/HikesContainer'
import HikeForm from './components/HikeForm'
import HikeUpdateForm from './components/HikeUpdateForm'
import HikeShow from './components/HikeShow'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Take-a-hike</h1>
          </header>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/hikes' component={HikesContainer} />
          <Switch>
            <Route path='/hikes/new' component={HikeForm} />
            <Route path='/hikes/:id/edit' component={HikeUpdateForm} />
            <Route path='/hikes/:id' component={HikeShow} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
