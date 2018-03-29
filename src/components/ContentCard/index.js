import React from 'react'
import Link from 'gatsby-link'
import Image from '../Image'
import './index.css'

const ContentCard = props => {
  return (
    <div
      className="contentCard"
      style={{
        marginTop: props.marginAdjustmentTop,
        marginBottom: props.marginAdjustment,
        marginLeft: props.marginAdjustment,
        marginRight: props.marginAdjustment,
      }}
    >
      <div className="flexContainer">{props.children}</div>
    </div>
  )
}

export default ContentCard
