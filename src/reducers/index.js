import { combineReducers } from 'redux'

import todos from './todosReducer'
import visibilityFilter from './visibilityFilterReducer'

export default combineReducers({
  todos,
  visibilityFilter
})