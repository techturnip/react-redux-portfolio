import React from 'react'
import { Button } from 'react-materialize'
import {
  faTwitter,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const date = new Date()

  return (
    <footer className="footer indigo">
      <p className="grey-text text-lighten-1 copyright">
        &copy; {date.getFullYear()} - Tyler Turnipseed
      </p>

      <Button
        floating
        fab={{ direction: 'top' }}
        icon="more_vert"
        className="green"
        large
        style={{ bottom: '70px' }}
      >
        <Button
          node="a"
          href="https://github.com/techturnip"
          target="_blank"
          floating
          className="red"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </Button>
        <Button
          node="a"
          href="https://www.linkedin.com/in/tyler-turnipseed/"
          target="_blank"
          floating
          className="green"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </Button>
        <Button
          node="a"
          href="https://twitter.com/tylertechseed"
          target="_blank"
          floating
          className="blue"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </Button>
      </Button>
    </footer>
  )
}

export default Footer
