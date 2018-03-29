import React from 'react'

import './index.css'
const Image = props => {
  let background = `url(${props.src})`
  let height = props.height
  let width = props.width
  return (
    <div
      style={{
        backgroundImage: background,
        height: height,
        backgroundSize: props.imageAdjust ? props.imageAdjust : 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  )
}

export default Image
