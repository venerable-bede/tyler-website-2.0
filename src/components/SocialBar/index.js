import React from 'react'
import Link from 'gatsby-link'
import * as FontAwesome from 'react-icons/lib/fa'

import './index.css'

const SocialBar = () => (
  <div className="socialBackground">
    <div className="socialSpacer">
      <div>
        <a href="https://www.instagram.com/sir_tyz">
          <FontAwesome.FaInstagram className="fontAwesome" />
        </a>
      </div>
      <div>
        <a href="https://plus.google.com/u/0/+sirtytyz">
          <FontAwesome.FaGooglePlusSquare className="fontAwesome" />
        </a>
      </div>
      <div>
        <a href="https://www.github.com/sirtyz">
          <FontAwesome.FaGithubSquare className="fontAwesome" />
        </a>
      </div>
    </div>
  </div>
)

export default SocialBar
