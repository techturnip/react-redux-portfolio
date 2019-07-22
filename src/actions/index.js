import axios from 'axios'

// ACTION TYPES =======================================|
//=====================================================|

// Portfolio action types
export const GET_PORTFOLIO_START = 'GET_PORTFOLIO_START'
export const GET_PORTFOLIO_SUCCESS = 'GET_PORTFOLIO_SUCCESS'
export const GET_PORTFOLIO_FAILED = 'GET_PORTFOLIO_FAILED'

// Blog action types

// ACTION CREATORS ====================================|
//=====================================================|
export const getPortfolio = () => {
  return dispatch => {
    dispatch({ type: GET_PORTFOLIO_START })

    axios
      .get('http://api.techturnip.us/wp-json/wp/v2/portfolio')
      .then(res => {
        const payload = res.data
        dispatch({ type: GET_PORTFOLIO_SUCCESS, payload })
      })
      .catch(err => {
        console.log('getPortfolio() SUCCESS: ' + err)
        const payload = err.response ? err.response.data : err
        dispatch({ type: GET_PORTFOLIO_FAILED, payload })
      })
  }
}
