import React, { Component } from 'react'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import M from 'materialize-css'

class App extends Component {
  componentDidMount() {
    M.AutoInit()
  }

  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App
