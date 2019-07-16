import { combineReducers } from 'redux'
import { portfolioReducer } from './portfolioReducer'
import { blogReducer } from './blogReducer.js'

export default combineReducers({
  portfolioReducer,
  blogReducer
})
