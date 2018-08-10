// import fetch from 'cross-fetch'
import fetch from 'isomorphic-fetch';

export function fetchHikes() {
  return (dispatch) => {
    dispatch({type: 'LOADING_HIKES'});
    return fetch('/hikes')
    .then(response => response.json())
    .then(responseJSON => {const hikes = responseJSON;
      return (dispatch({type: 'FETCH_HIKES', payload: hikes}))
    })
  }
}

export function searchHikes(searchTerm) {
  return {
    type: "SEARCH_HIKES",
    payload: searchTerm
  }
}

export function addHike(hike) {
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
      return (dispatch({type: 'ADD_HIKE', payload: hike}))
    })
  }
}

export function updateHike(hike) {
  return (dispatch) => {
    dispatch({type: 'LOADING_HIKES'});
    return fetch(`/hikes/${hike.id}`, {
      method: 'PUT',
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(hike)
    })
    .then(response => response.json())
    .then(responseJSON => {const hike = responseJSON;
      return (dispatch({type: 'UPDATE_HIKE', payload: hike}))
    })
  }
}

export function deleteHike(hike) {
 return (dispatch) => {
  dispatch({type: 'DELETE_HIKE',
  payload: hike
  })
   dispatch({type: 'LOADING_HIKES'});
   return fetch(`/hikes/${hike.id}`, {
     method: 'DELETE',
     headers: {
       'Accept': "application/json",
       'Content-Type': "application/json",
     },
     body: JSON.stringify(hike)
   }
  )
 }
}
