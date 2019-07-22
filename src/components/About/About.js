import React from 'react'

const About = () => {
  return (
    <div className="about container">
      <div className="about-wrapper indigo white-text card">
        <h2 className="about-title">Hello There!</h2>
        <hr />
        <div className="about-content">
          <p className="about-text">
            My name is Tyler, I'm a <strong>Full Stack Web Developer</strong>{' '}
            with a passion for solving problems, coding and creating interesting
            experiences. I have been interested in the Web since the days of
            table-based layouts. After spending many years of working with HTML
            and CSS, I decided it was time to take things to the next level.
            That was when I discovered <strong>Lambda School</strong>.
          </p>
          <p>
            While my passion for coding has been with me for years, it wasn't
            until I enrolled at Lambda School that I was able to attain the
            means for transferring that passion into a prosperous career and so
            my journey began. I can now confidently say that I am a{' '}
            <strong>Front End Engineer</strong> with the ability to{' '}
            <strong>consume API's</strong> and{' '}
            <strong>develop front-facing applications</strong> with technologies
            like <strong>React &amp; Redux</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
