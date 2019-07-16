import React from 'react'
import ReactDOM from 'react-dom'
// Styles
import 'materialize-css/dist/css/materialize.min.css'
import './index.scss'
// Root component
import App from './App'
// Routing
import { BrowserRouter as Router } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
// Middleware
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// Reducer
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
