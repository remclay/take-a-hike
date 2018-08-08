// import fetch from 'cross-fetch'
import fetch from 'isomorphic-fetch';

export function fetchHikes() {
  return (dispatch) => {
    dispatch({type: 'LOADING_HKES'});
    return fetch('/hikes')
    .then(response => response.json())
    .then(responseJSON => {const hikes = responseJSON;
      return (dispatch({type: 'FETCH_HIKES', payload: hikes}))
    })
  }
}

export function addHike(hike, history) {
  return (dispatch) => {
    dispatch({type: 'LOADING_HIKES'});
    return fetch('/hikes', {
      method: 'POST',
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(hike)
    })
    .then(response => response.json())
    .then(responseJSON => {const hike = responseJSON;
      history.push('/hikes');
      return (dispatch({type: 'ADD_HIKE', payload: hike}))
    })
  }
}
