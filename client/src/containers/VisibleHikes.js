import { connect } from 'react-redux'
import Hikes from '../components/Hikes'
// import { VisibilityFilters } from '../actions/hikeActions'

const getVisibleHikes = (hikes, filter, query) => {
  let matchedHikes = hikes.hikes
  if (query !== '') {
    matchedHikes = matchedHikes.filter((el) => (el.name.toLowerCase().includes(query.toLowerCase())) || (el.location.toLowerCase().includes(query.toLowerCase())))
  }
  if (filter === "SHOW_ALL") {
    return matchedHikes
  } else if (filter === "SHOW_EASY") {
    return matchedHikes.filter(h => h.difficulty === "Easy")
  } else if (filter === "SHOW_MODERATE") {
    return matchedHikes.filter(h => h.difficulty === "Moderate")
  } else if (filter === "SHOW_HARD") {
    return matchedHikes.filter(h => h.difficulty === "Hard")
  } else {
    throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  hikes: getVisibleHikes(state.hikes, state.visibilityFilter, state.queryFilter)
})

export default connect(mapStateToProps)(Hikes)
