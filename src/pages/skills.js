import React from 'react'
import Link from 'gatsby-link'
import ContentCard from '../components/ContentCard'
import SkillTile from '../components/SkillTile'

const styles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
}

const SecondPage = () => (
  <div>
    <ContentCard>
      <h1>Skills</h1>
      <div style={styles}>
        <SkillTile>JavaScript</SkillTile>
        <SkillTile>React</SkillTile>
        <SkillTile>Angular</SkillTile>
        <SkillTile>HTML</SkillTile>
      </div>
      <div style={styles}>
        <SkillTile>CSS</SkillTile>
        <SkillTile>Python</SkillTile>
        <SkillTile>PHP</SkillTile>
        <SkillTile>Ruby</SkillTile>
      </div>
      <div style={styles}>
        <SkillTile>Wordpress</SkillTile>
        <SkillTile>Gatsby</SkillTile>
        <SkillTile>Java</SkillTile>
        <SkillTile>C#</SkillTile>
      </div>

      <h1>Tools</h1>
      <div style={styles}>
        <SkillTile>Node</SkillTile>
        <SkillTile>VS Code</SkillTile>
        <SkillTile>Git</SkillTile>
        <SkillTile>GitHub</SkillTile>
      </div>
      <div style={styles}>
        <SkillTile>SVN</SkillTile>
        <SkillTile>Azure DevOps</SkillTile>
        <SkillTile>Adobe Photoshop</SkillTile>
        <SkillTile>Adobe Illustrator</SkillTile>
      </div>
      <div style={styles}>
        <SkillTile>Adobe XD</SkillTile>
        <SkillTile>Visual Studio</SkillTile>
        <SkillTile>Netlify</SkillTile>
        <SkillTile>Heroku</SkillTile>
      </div>
    </ContentCard>
  </div>
)

export default SecondPage
