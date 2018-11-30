import React from 'react'
import Link from 'gatsby-link'
import ContentCard from '../components/ContentCard'
import * as FontAwesome from 'react-icons/lib/fa'

const contact = () => {
  return (
    <ContentCard>
      <h1>Contact</h1>
      <p>Feel free to contact me with any questions. I would love to help!</p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            margin: '10',
            textAlign: 'center',
          }}
        >
          <h3>Email</h3>
          <h4>
            <a
              href="mailto:coxtdc@gmail.com"
              style={{
                textDecoration: 'none',
                color: '#6FC7CC',
              }}
            >
              coxtdc@gmail.com
            </a>
          </h4>
        </div>

        <div
          style={{
            margin: '10',
            textAlign: 'center',
          }}
        >
          <h3>Social</h3>
          <div
            style={{
              fontSize: '30',
            }}
          >
            <a href="http://www.github.com/sirtyz" target="_blank">
              <FontAwesome.FaGithubSquare
                style={{
                  margin: '10',
                  textDecoration: 'none',
                  color: '#6FC7CC',
                }}
              />
            </a>
            <a href="http://www.instagram.com/sir_tyz" target="_blank">
              <FontAwesome.FaInstagram
                style={{
                  margin: '10',
                  textDecoration: 'none',
                  color: '#6FC7CC',
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tylercoxdesign/"
              target="_blank"
            >
              <FontAwesome.FaLinkedin
                style={{
                  margin: '10',
                  textDecoration: 'none',
                  color: '#6FC7CC',
                }}
              />
            </a>
            <a href="https://www.behance.net/tcox21592" target="_blank">
              <FontAwesome.FaBehance
                style={{
                  margin: '10',
                  textDecoration: 'none',
                  color: '#6FC7CC',
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export default contact
