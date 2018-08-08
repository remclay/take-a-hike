function hikesReducer(state = {loading: false, hikes: []}, action) {
  switch (action.type) {
    case 'LOADING_HKES':
      return {...state, loading: true}
    case 'FETCH_HIKES':
      return {...state, hikes: action.payload};
    // case 'ADD_HIKE':
    //   return [
    //     ...state,
    //     {
    //       id: action.id,
    //       location: action.location,
    //       difficulty: action.difficulty
    //     }
    //   ]
    default:
      return state
  }
}

export default hikesReducer;
