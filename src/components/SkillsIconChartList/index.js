import ReactDOM from 'react-dom'
import React from 'react'
import Link from 'gatsby-link'

import './index.css'

const SkillsIconChartList = () => {
  return (
    <div className="iconList">
      <div>
        <h1>Languages</h1>
        <i className="fab fa-html5" />
        <i className="fab fa-js-square" />
        <i className="fab fa-react" />
        <i className="fab fa-angular" />
        <i className="fab fa-css3-alt" />
        <i className="fab fa-php" />
      </div>

      <div>
        <h1>Systems</h1>
        <i className="fab fa-windows" />
        <i className="fab fa-apple" />
        <i className="fab fa-node-js" />
      </div>
      <div>
        <h1>Software</h1>
        <i className="fab fa-github" />
        <i className="fab fa-android" />
        <i className="fab fa-app-store" />
      </div>
    </div>
  )
}

export default SkillsIconChartList
