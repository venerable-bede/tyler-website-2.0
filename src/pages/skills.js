import React from 'react'
import Link from 'gatsby-link'
import ContentCard from '../components/ContentCard'
import SkillsBarChartList from '../components/SkillsBarChartList'
import SkillsIconChartList from '../components/SkillsIconChartList'

const Skills = () => (
  <div>
    <ContentCard>
      <SkillsBarChartList />
      <SkillsIconChartList />
    </ContentCard>
  </div>
)

export default Skills