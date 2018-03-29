import React from 'react'
import Link from 'gatsby-link'
import Image from '../Image'
import ContentCard from '../ContentCard'

import './index.css'

const CardWithImage = props => {
  return (
    <div className="cardWithImage">
      <Image height="300px" src={props.imageURL} imageAdjust="cover" />
      <ContentCard
        className="card"
        marginAdjustment={0}
        marginAdjustmentTop={-10}
      >
        {props.children}
      </ContentCard>
    </div>
  )
}

export default CardWithImage
