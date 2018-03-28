import React from 'react'
import Link from 'gatsby-link'
import Image from '../Image'
import avatarImg from '../../Images/Avatar_Tyler-01.67204a01.png'
import './index.css'

const ContentCard = props => {
  return (
    <div className="contentCard">
      <div className="flexContainer">{props.children}</div>
    </div>
  )
}

export default ContentCard
