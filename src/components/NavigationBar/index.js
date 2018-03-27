import React from 'react'
import Link from 'gatsby-link'
import avatarImg from '../../Images/Avatar_Tyler-01.67204a01.png'
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
        <Link to="/">Work</Link>
      </div>
      <div>
        <Link to="/">My Realm</Link>
      </div>
      <div>
        <Link to="/"> Contact </Link>
      </div>
    </div>
  </div>
)

export default NavigationBar
