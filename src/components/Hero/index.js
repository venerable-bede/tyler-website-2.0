import React from 'react'
import './index.css'
import Link from 'gatsby-link'

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="headText">NEED A WEB DEVELOPER?</div>
      <Link className="subText" to="/">
        let's talk.
      </Link>
    </div>
  )
}

export default Hero
