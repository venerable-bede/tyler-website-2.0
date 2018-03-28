import React from 'react'
import Link from 'gatsby-link'
import CardWithImage from '../components/CardWithImage'
import image1 from '../Images/Avatar_Tyler-01.67204a01.png'

const Work = () => (
  <div>
    <CardWithImage imageURL={image1}>
      <h1>My Title</h1>
    </CardWithImage>
  </div>
)

export default Work
