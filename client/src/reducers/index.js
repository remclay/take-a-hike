import { combineReducers } from 'redux'
import hikes from './hikes'
import visibilityFilter from './visibilityFilter'
import queryFilter from './queryFilter'

export default combineReducers({
    hikes,
    visibilityFilter,
    queryFilter
})
