function hikesReducer(state = {loading: true, hikes: [], errors: []}, action) {
  switch (action.type) {
    case 'LOADING_HIKES':
      return {...state, loading: true}
    case 'FETCH_HIKES':
      return {...state, loading: false, hikes: action.payload};
    case 'ADD_HIKE_SUCCESS':
      const hike = action.payload
      return {loading: false, errors: [], hikes: [...state.hikes, hike]}
    case 'ADD_HIKE_FAILURE':
      return {...state, errors: [...state.errors, action.message]}
    case 'UPDATE_HIKE':
      const hikeDetails = action.payload;
      const toUpdate = state.hikes.find(el => el.id === hikeDetails.id)
      const index = state.hikes.indexOf(toUpdate)
      return {loading: false, errors: [], hikes: [...state.hikes.slice(0, index), hikeDetails, ...state.hikes.slice(index + 1)]}
    case 'CLEAR_ERRORS':
      return {...state, errors: []}
    default:
      return state
  }
}

export default hikesReducer;
