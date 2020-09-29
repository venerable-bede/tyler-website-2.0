import React from 'react'
import Link from 'gatsby-link'
import ContentCard from '../components/ContentCard'

const aboutMe = () => (
  <div>
    <ContentCard>
      <h1>Hi. I'm Tyler.</h1>
      <hr style={{ backgroundColor: '#F06449' }} />
      <h3>Experience</h3>
      <div>
        <b>J.B. Hunt Transport Services, Inc.</b>
        <br />
        <i>Software Engineer, 2018-Present</i>
        <p>
          Use Angular, Node, and React on a daily basis. Work with UX and
          Marketing teams to build out public facing web pages and sites.
          Switching between technologies is crucial in this position due to the
          variance in the webpages and web related projects for which my team is
          responsible. Lead developer for all Wordpress related tasks within Web
          Dev team.
        </p>
      </div>
      <div>
        <b>WBS (World Bible School)</b>
        <br />
        <i>Jr. Web Developer, 2017</i>
        <p>
          Developed and designed UX functionality and flow. Trouble shooting and
          work with Ruby on Rails, Postgres, Docker, and Heroku was required.
        </p>
      </div>
      <div>
        <b>VOM (Voice of the Martyrs)</b>
        <br />
        <i>Web Development Intern, 2016</i>
        <p>
          Developed solutions for in-house hardware and applications using JS,
          Angular, and jQuery, as well as helping with live web editing and
          creation.
        </p>
      </div>
      <div>
        <b>PDG Creative</b>
        <br />
        <i>Web Design Intern, 2015</i>
        <p>
          Graphic and web design internship. Helped create and implement web
          designs with a web developer and a team of designers.
        </p>
      </div>
      <div>
        <b>GTP (Global Trade Partners)</b>
        <br />
        <i>IT Intern, 2015 </i>
        <p>
          IT and networking internship. Helped with integration and installation
          of applications and hardware. Worked directly under senior networking
          engineer.
        </p>
      </div>
      <hr style={{ backgroundColor: '#F06449' }} />
      <h3>Education & Achievements</h3>
      <div>
        <b>Harding University</b>
        <br />
        <i>Computer Science, 2013-2017</i>
        <p>Bachelor of Computer Science – Minor in Graphic Design</p>
      </div>
      <div>
        <b>J.B. Hunt 2nd Annual Hackathon Finalist</b>
        <br />
        <i>Load Management Planner</i>
        <p>
          Competed against 49 teams averaging 3-4 members each (~200 contestants
          total) over the course of a 48 hour period to create a program that
          fulfilled the criteria set by J.B. Hunt to improve their internal tech
          platform. The Project went through two judging sessions by technology
          executives and passed on to become a final contender with 8 other
          teams.
        </p>
      </div>
      <div>
        <b>J.B. Hunt 3rd Annual Hackathon Community Improvement Award Winner</b>
        <br />
        <i>Company Giving Official Webpage</i>
        <p>
          Competed against 250 contestants on teams averaging 3-4 members each
          over the course of a 48 hour period. My team and I created a page to
          fufill the need to revamp and revitalize the old and outdated company
          giving site used to help other non-proffits and organizations request
          J.B. Hunt for giving contributions. J.B. Hunt takes giving very
          seriously, so my team and I set out to make sure we provided a warm
          and welcoming place to accommodate these requests. Due to our efforts,
          my team was awarded with the Community Improvement award where we were
          recognized company-wide.
        </p>
      </div>
      <div>
        <b>Eagle Scout</b>
        <br />
        <i>BSA - Boy Scouts of America</i>
        <p>Acquired highest award of leadership in the scouting program.</p>
      </div>
    </ContentCard>
  </div>
)

export default aboutMe
