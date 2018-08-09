import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import HikesContainer from './components/HikesContainer'
import HikeForm from './components/HikeForm'
import HikeUpdateForm from './components/HikeUpdateForm'
import Hike from './components/Hike'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Take-a-hike</h1>
          </header>
          <Route exact path='/' component={Home} />
          <Route exact path='/hikes' component={HikesContainer} />
          <Switch>
            <Route path='/hikes/new' component={HikeForm} />
            <Route path='/hikes/:id/edit' component={HikeUpdateForm} />
            <Route path='/hikes/:id' component={Hike} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
