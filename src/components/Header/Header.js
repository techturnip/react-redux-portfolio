import React from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'

const Header = props => {
  const setActive = e => {
    const linkList = e.target.parentNode.parentNode.children
    const linkValue = e.target.parentNode.innerHTML

    for (let i = 0; i < linkList.length; i++) {
      console.log(linkList[i])
      if (linkList[i].innerHTML === linkValue) {
        linkList[i].classList.add('active')
      } else {
        linkList[i].classList.remove('active')
      }
    }
  }

  return (
    <header className="header">
      <Navbar
        fixed
        className="indigo"
        brand={<span>Tyler Turnipseed</span>}
        centerLogo
        alignLinks="left"
      >
        <NavItem
          onClick={e => {
            setActive(e)
            props.history.push('/')
          }}
        >
          Home
        </NavItem>
        <NavItem
          onClick={e => {
            setActive(e)
            props.history.push('/about')
          }}
        >
          About
        </NavItem>
        <NavItem onClick={setActive}>Portfolio</NavItem>
        <NavItem onClick={setActive}>Blog</NavItem>
      </Navbar>
    </header>
  )
}

export default withRouter(Header)
