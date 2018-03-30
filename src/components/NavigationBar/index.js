import React from 'react'
import Link from 'gatsby-link'
import avatarImg from '../../Images/Avatar_Tyler-01.jpg'
import './index.css'

const NavigationBar = () => (
  <div className="navBackground">
    <div className="navSpacer">
      <Link className="homeLink" to="/">
        <img className="navImage" src={avatarImg} height="60" width="60" />
      </Link>
      <div>
        <Link to="/skills/">Skills</Link>
      </div>
      <div>
        <Link to="/work/">Work</Link>
      </div>

      <div>
        <a href="mailto:coxtdc@gmail.com" target="_blank">
          Contact
        </a>
      </div>
    </div>
  </div>
)

export default NavigationBar
