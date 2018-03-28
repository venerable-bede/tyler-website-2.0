import React from 'react'
import Link from 'gatsby-link'
import ContentCard from '../ContentCard'
import ReactDOM from 'react-dom'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'

import './index.css'

const languageData = [
  { skill: 'html', rating: 5 },
  { skill: 'JavaScript', rating: 5 },
  { skill: 'React', rating: 4 },
  { skill: 'Angular', rating: 3 },
  { skill: 'CSS', rating: 4 },
  { skill: 'Swift', rating: 3 },
  { skill: 'Java', rating: 3 },
  { skill: 'PHP', rating: 2 },
]

const systemsData = [
  { skill: 'Windows OS', rating: 5 },
  { skill: 'Mac OS', rating: 5 },
  { skill: 'Node JS', rating: 4 },
  { skill: 'Mongo DB', rating: 2 },
]

const softwareData = [
  { skill: 'Adobe Photoshop', rating: 5 },
  { skill: 'Adobe Experience Design', rating: 5 },
  { skill: 'Adobe Illustrator', rating: 5 },
  { skill: 'IntelliJ', rating: 4 },
  { skill: 'GitHub Desktop', rating: 4 },
  { skill: 'NetBeans', rating: 3 },
  { skill: 'VS Code', rating: 5 },
  { skill: 'Atom Text Editor', rating: 4 },
  { skill: 'Android SDK', rating: 3 },
  { skill: 'Sublime Text', rating: 3 },
]

const SkillsBarChartList = () => {
  return (
    <div className="chartList">
      <h1 style={{ marginBottom: 0 }}>Languages</h1>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
        animate={{ duration: 500 }}
        padding={70}
      >
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8]}
          tickFormat={[
            'html',
            'JS',
            'React',
            'Angular',
            'CSS',
            'Swift',
            'Java',
            'PHP',
          ]}
        />
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
        />
        <VictoryBar
          horizontal
          data={languageData}
          x="skill"
          y="rating"
          style={{
            data: { fill: '#8186F7' },
          }}
        />
      </VictoryChart>

      <h1 style={{ marginBottom: 0 }}>Systems</h1>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
        animate={{ duration: 500 }}
        padding={70}
      >
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={['Windows OS', 'Mac OS', 'Node JS', 'Mongo DB']}
          style={{
            tickLabels: { fontSize: 10, padding: 5 },
          }}
        />
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
        />
        <VictoryBar
          horizontal
          data={systemsData}
          x="skill"
          y="rating"
          style={{
            data: { fill: '#8186F7' },
          }}
        />
      </VictoryChart>

      <h1 style={{ marginBottom: 0 }}>Software</h1>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
        animate={{ duration: 500 }}
        padding={70}
      >
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          tickFormat={[
            'Adobe Photoshop',
            'Adobe Experience Design',
            'Adobe Illustrator',
            'IntelliJ',
            'GitHub Desktop',
            'NetBeans',
            'VS Code',
            'Atom Text Editor',
            'Android SDK',
            'Sublime Text',
          ]}
          style={{
            tickLabels: { fontSize: 5, padding: 5 },
          }}
        />
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
        />
        <VictoryBar
          horizontal
          data={softwareData}
          x="skill"
          y="rating"
          style={{
            data: { fill: '#8186F7' },
          }}
        />
      </VictoryChart>
    </div>
  )
}

export default SkillsBarChartList
