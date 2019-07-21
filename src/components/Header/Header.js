import React from 'react'
import { Navbar, NavItem } from 'react-materialize'

const Header = () => {
  return (
    <header className="header">
      <Navbar
        className="indigo"
        brand={<span>Tyler Turnipseed</span>}
        centerLogo
        alignLinks="left"
      >
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Portfolio</NavItem>
        <NavItem>Blog</NavItem>
      </Navbar>
    </header>
  )
}

export default Header
