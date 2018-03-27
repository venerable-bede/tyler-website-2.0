import React from 'react'
import Link from 'gatsby-link'
import Image from '../Image'
import avatarImg from '../../Images/Avatar_Tyler-01.67204a01.png'
import './index.css'

const WelcomeCard = props => {
  return (
    <div className="welcomeCard">
      <div className="flexContainer">
        <div className="contentContainer">
          <h1>{props.header}</h1>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  )
}

export default WelcomeCard
