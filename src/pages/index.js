import React from 'react'
import Link from 'gatsby-link'
import ContentCard from '../components/ContentCard'
import Hero from '../components/Hero'
import ButtonLink from '../components/Button'

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <ContentCard>
        <h1>Greetings</h1>
        <p>
          Hi, I'm Tyler. I am a web developer and designer from Arkansas. I am
          currently working as an associate software engineer, and I constantly
          find myself coming up with new ideas for front end web development and
          UI design. Illustration fuels my creativity and I enjoy implementing
          it into my web designs when possible. The intention of this site is to
          provide those who are interested an easy way to see everything that I
          have been up to recently. I try to make everything that I do connect
          in a meaningful way, and I hope that can be seen with this site.
        </p>
        <ButtonLink link="/aboutMe/">About Me</ButtonLink>
      </ContentCard>
    </div>
  )
}

export default IndexPage
