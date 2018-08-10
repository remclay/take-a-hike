import { connect } from 'react-redux'
import Hikes from '../components/Hikes'
import { VisibilityFilters } from '../actions/hikeActions'

const getVisibleHikes = (hikes, filter) => {
  // debugger
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return hikes.hikes
    case VisibilityFilters.SHOW_EASY:
      return hikes.hikes.filter(h => h.difficulty === "Easy")
    case VisibilityFilters.SHOW_MODERATE:
      return hikes.hikes.filter(h => h.difficulty === "Moderate")
    case VisibilityFilters.SHOW_HARD:
      return hikes.hikes.filter(h => h.difficulty === "Hard")
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  hikes: getVisibleHikes(state.hikes, state.visibilityFilter)
})

export default connect(mapStateToProps)(Hikes)
