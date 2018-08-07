import React from 'react';
import { render } from 'react-dom'
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import { createStore } from 'redux'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
