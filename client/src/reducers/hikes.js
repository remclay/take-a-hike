const hikes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HIKE':
      return [
        ...state,
        {
          id: action.id,
          location: action.location,
          difficulty: action.difficulty
        }
      ]
    default:
      return state
  }
}
​
export default hikes
