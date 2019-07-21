import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Components
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

// Styles
import bg from './assets/bg.jpg'
import M from 'materialize-css'

class App extends Component {
  componentDidMount() {
    M.AutoInit()
  }

  render() {
    return (
      <div className="app" style={{ backgroundImage: `url(${bg})` }}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Footer />
      </div>
    )
  }
}

export default App
