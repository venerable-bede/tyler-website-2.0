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
          I'm Tyler. I'm, a web developer and graphic designer from Arkansas. I
          am currently working as an associate software engineer, and I
          constantly find myself coming up with new ideas for front end web
          development and UI design. Illustration fuels my creativity and I
          enjoy implementing it into my web designs when possible.
          <br />
          <br />
          The intention of this site is to allow those who are interested in my
          work and want to discuss the possibility of working with me a way to
          check out what I do. If you are one of those people, take a look at
          the button below to see my credentials. I have some of my work linked
          above. After you take a look through that, consider shooting me an
          email or contacting me on social media so we can make something
          awesome. If you happened to just stumble upon this site, feel free to
          look around. I'd love to have feedback on the site if you want to give
          it.
        </p>
        <ButtonLink link="/aboutMe/">About Me</ButtonLink>
      </ContentCard>
    </div>
  )
}

export default IndexPage
