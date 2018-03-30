import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const ButtonLink = props => {
  return (
    <a className="buttonStyle" href={props.link}>
      {props.children}
    </a>
  )
}

export default ButtonLink
