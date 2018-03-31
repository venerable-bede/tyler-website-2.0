import React from 'react'
import Link from 'gatsby-link'
import ContentCard from '../components/ContentCard'
import Hero from '../components/Hero'
import ButtonLink from '../components/ButtonLink'

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <ContentCard>
        <h1>Greetings</h1>
        <p>
          I'm Tyler, a web developer and graphic designer from Arkansas. I am
          currently working as an associate software engineer, and constantly
          find myself coming up with new ideas for front end web development and
          UI design. Illustration fuels my creativity and I enjoy implementing
          it into my web designs when possible.
          <br />
          <br />
          The intention of this site is to showcase what I do for those who are
          interested in my work and want to discuss the possibility of working
          with me. If you find yourself in need of a web developer, take a look
          at the button below to see my credentials, then go check out some of
          my work linked above. After you take a look through that, consider
          shooting me an email or contacting me on social media so we can make
          something awesome.
        </p>
        <ButtonLink link="/aboutMe/">about me</ButtonLink>
      </ContentCard>
    </div>
  )
}

export default IndexPage
