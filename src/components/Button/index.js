import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const ButtonLink = props => {
  return (
    <Link className="buttonStyle" to={props.link}>
      {props.children}
    </Link>
  )
}

export default ButtonLink
