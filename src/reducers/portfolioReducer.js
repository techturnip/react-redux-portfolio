import {
  GET_PORTFOLIO_START,
  GET_PORTFOLIO_SUCCESS,
  GET_PORTFOLIO_FAILED
} from '../actions'

const initialState = {
  portfolio: [],
  fetching: false
}

export const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET_PORTFOLIO
    case GET_PORTFOLIO_START: {
      return {
        ...state,
        fetching: true
      }
    }
    case GET_PORTFOLIO_SUCCESS: {
      return {
        ...state,
        portfolio: action.payload,
        fetching: false
      }
    }
    case GET_PORTFOLIO_FAILED: {
      return {
        ...state,
        fetching: false
      }
    }
    // DEFAULT
    default:
      return state
  }
}
