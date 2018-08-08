function hikesReducer(state = {loading: false, hikes: []}, action) {
  switch (action.type) {
    case 'LOADING_HKES':
      return {...state, loading: true}
    case 'FETCH_HIKES':
      return {...state, hikes: action.payload};
    case 'ADD_HIKE':
      const hike = action.payload
      return {loading: false, hikes: [...state.hikes, hike]}
    case 'UPDATE_HIKE':
      const hikeDetails = action.payload;
      const toUpdate = state.hikes.find(el => el.id === updatedHike.id)
      const index = state.hikes.indexOf(recipeToUpdate)
      return {loading: false, hikes: [...state.hikes.slice(0, index), hikeDetails, ...state.hikes.slice(index + 1)]}
    case 'DELETE_HIKE':
      // pass id to action
      const newHikes = state.hikes.filter(el => el.id !== action.payload)
      return {loading: false, hikes: newHikes}
    default:
      return state
  }
}

export default hikesReducer;
