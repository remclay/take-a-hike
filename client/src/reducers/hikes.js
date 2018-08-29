function hikesReducer(state = {loading: false, hikes: [], errors: []}, action) {
  switch (action.type) {
    case 'LOADING_HKES':
      return {...state, loading: true}
    case 'FETCH_HIKES':
      return {...state, hikes: action.payload};
    // case 'SEARCH_HIKES':
    //   const term = action.payload
    //   const filteredHikes = state.hikes.filter((el) => (el.name.toLowerCase().includes(term.toLowerCase())))
    //   return {loading: false, hikes: filteredHikes}
    case 'ADD_HIKE_SUCCESS':
      const hike = action.payload
      return {loading: false, errors: [], hikes: [...state.hikes, hike]}
    case 'ADD_HIKE_FAILURE':
      return {...state, errors: [...state.errors, action.message]}
    case 'UPDATE_HIKE':
      const hikeDetails = action.payload;
      const toUpdate = state.hikes.find(el => el.id === hikeDetails.id)
      const index = state.hikes.indexOf(toUpdate)
      return {loading: false, hikes: [...state.hikes.slice(0, index), hikeDetails, ...state.hikes.slice(index + 1)]}
    case 'DELETE_HIKE':
      // pass id to action
      const newHikes = state.hikes.filter(el => el.id !== action.payload)
      return {loading: false, errors: [], hikes: newHikes}
    case 'CLEAR_ERRORS':
      return {...state, errors: []}
    default:
      return state
  }
}

export default hikesReducer;
