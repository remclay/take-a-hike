const queryFilter = (state = '', action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return action.query
    default:
      return state
  }
}

export default queryFilter
