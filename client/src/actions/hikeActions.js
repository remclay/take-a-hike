import fetch from 'cross-fetch';
// import fetch from 'isomorphic-fetch';

export function fetchHikes() {
  return (dispatch) => {
    dispatch({type: 'LOADING_HIKES'});
    return fetch('/hikes')
    .then(response => response.json())
    .then(responseJSON => {const hikes = responseJSON;
      return (dispatch({type: 'FETCH_HIKES', payload: hikes}))
    })
    .catch(error => console.error(error));
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
    .then(responseJSON => {
      if (responseJSON.status !== "error") {
        const hike = responseJSON;
        return (dispatch({
        type: 'ADD_HIKE_SUCCESS',
        payload: hike
      }), history.push(`/hikes/${hike.id}`));
      } else {
        return (dispatch({
          type: 'ADD_HIKE_FAILURE',
          message: responseJSON.message || "Hike was not added."
        }), history.push(`/hikes`));
      }
    })
  }
}

export function updateHike(hike, history) {
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
    .then(responseJSON => {
      console.log(responseJSON)
      if (responseJSON.state !== "error") {
        const hike = responseJSON;
        console.log("success")
        return (dispatch({
          type: 'UPDATE_HIKE_SUCCESS',
          payload: hike
        }), history.push(`/hikes/${hike.id}`))
      } else {
        console.log("oops")
        return (dispatch({
          type: 'UPDATE_HIKE_FAILURE',
          message: responseJSON.message || "Hike was not updated."
        }), history.push(`/hikes`));
      }
    })
  }
}

export function deleteHike(hike, history) {
 return (dispatch) => {
   dispatch({type: 'LOADING_HIKES'});
   return fetch(`/hikes/${hike.id}`, {
     method: 'DELETE',
     headers: {
       'Accept': "application/json",
       'Content-Type': "application/json",
     },
     body: JSON.stringify(hike)
   })
   .then(response => {
     return history.push('/hikes')
   })
  }
}

export function clearErrors() {
  return {
    type: "CLEAR_ERRORS"
  }
}

export function setQuery(query) {
  return {
    type: "SET_QUERY",
    query
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_EASY: 'SHOW_EASY',
  SHOW_MODERATE: 'SHOW_MODERATE',
  SHOW_HARD: 'SHOW_HARD'
}
