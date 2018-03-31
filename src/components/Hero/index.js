import React from 'react'
import Link from 'gatsby-link'
import ButtonLink from '../ButtonLink'

import './index.css'

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="headText">NEED A WEB DEVELOPER?</div>
      <ButtonLink link="/contact/">let's talk</ButtonLink>
    </div>
  )
}

export default Hero
