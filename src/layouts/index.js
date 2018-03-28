import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SocialBar from '../components/SocialBar'
import NavigationBar from '../components/NavigationBar'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Tyler Cox Design"
      meta={[
        {
          name: 'description',
          content: 'A website introducing Tyler, a web developer and designer.',
        },
        {
          name: 'keywords',
          content:
            'webdesign, programming, development, react, javascript, code, software, engineer',
        },
      ]}
    >
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.9/css/all.css"
        integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1"
        crossorigin="anonymous"
      />
    </Helmet>
    <NavigationBar />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
      <SocialBar />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
