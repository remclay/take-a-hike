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
