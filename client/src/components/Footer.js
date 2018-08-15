import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/hikeActions'

const Footer = () => (
  <div className="filter-container">
    <label>Filter by difficulty: </label>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_EASY}>
      Easy
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_MODERATE}>
      Moderate
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_HARD}>
      Hard
    </FilterLink>
  </div>
)

export default Footer
