import React from 'react'
import Link from 'gatsby-link'
import WelcomeCard from '../components/WelcomeCard'
import Hero from '../components/Hero'
import SocialBar from '../components/SocialBar'

const IndexPage = () => {
  let content = `
    Hi, I'm Tyler. I am a web developer and designer from Arkansas. I am
    currently working as an assoiciate software engineer, and I
    constantly find myself coming up with new ideas for front end web
    development and UI design. Illustration fuels my creativity and I
    enjoy implementing it into my web designs when possible.
    The intention of this site is to provide those who are interested an
    easy way to see everything that I have been up to recently. I try to
    make everything that I do connect in a meaningful way, and I hope
    that can be seen with this site.`
  let header = 'Greetings'
  return (
    <div>
      <Hero />
      <WelcomeCard content={content} header={header} />
      <SocialBar />
    </div>
  )
}

export default IndexPage
