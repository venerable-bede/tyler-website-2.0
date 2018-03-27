import React from 'react'
import Link from 'gatsby-link'
import * as FontAwesome from 'react-icons/lib/fa'

import './index.css'

const SocialBar = () => (
  <div className="socialBackground">
    <div className="socialSpacer">
      <div>
        <Link to="/page-2/">
          <FontAwesome.FaInstagram className="fontAwesome" />
        </Link>
      </div>
      <div>
        <Link to="/page-2/">
          <FontAwesome.FaGooglePlusSquare className="fontAwesome" />
        </Link>
      </div>
      <div>
        <Link to="/page-2/">
          <FontAwesome.FaGithubSquare className="fontAwesome" />
        </Link>
      </div>
    </div>
  </div>
)

export default SocialBar
