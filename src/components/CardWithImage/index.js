import React from 'react'
import Link from 'gatsby-link'
import Image from '../Image'
import ContentCard from '../ContentCard'

import './index.css'

const CardWithImage = props => {
  return (
    <div>
      <Image height="300px" src={props.imageURL} />
      <ContentCard className="card">{props.children}</ContentCard>
    </div>
  )
}

export default CardWithImage
