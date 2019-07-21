import React from 'react'

const Footer = () => {
  const date = new Date()

  return (
    <footer className="footer blue lighten-1">
      <p className="grey-text text-lighten-3 copyright">
        &copy; {date.getFullYear()} - Tyler Turnipseed
      </p>
    </footer>
  )
}

export default Footer
