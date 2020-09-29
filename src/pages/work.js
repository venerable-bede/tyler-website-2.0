import React from 'react'
import Link from 'gatsby-link'
import CardWithImage from '../components/CardWithImage'
import serviceMasterImg from '../Images/serviceMasterMedicalScreenshot.jpg'
import photography from '../Images/photographyScreenShot.jpg'
import designWork from '../Images/designWork.jpg'
import greyborough from '../Images/greyboroughScreenShot.jpg'
import bbashImg from '../Images/finished_logo.png'
import estariaDb from '../Images/estariaDb.jpg'
import bozbarkImg from '../Images/bozbark-screenshot.png'
import hexBuddyImg from '../Images/hexbuddy.png'
import ButtonLink from '../components/ButtonLink'

const Work = () => (
  <div>
    <CardWithImage imageURL={bozbarkImg}>
      <a href="https://www.bozbark.com">
        <h1>Bozbark</h1>
      </a>
      <i>Project Started: 2019</i>
      <p>
        Bozbark is a blog with "Curated information about self-reliance, doing
        things that are meaningful, and staying connected to reality in a
        digital world." Created with Gatsby, this project uses markdown files as
        a source for each blog post, making it purely a frontend project.
      </p>
    </CardWithImage>

    <CardWithImage imageURL={hexBuddyImg}>
      <a href="https://www.hexbuddy.com">
        <h1>Hex Buddy</h1>
      </a>
      <i>Project Started: 2019</i>
      <p>
        Hex Buddy is an app built as a tool for personal games of tabletop RPGs.
        It reads data from a JSON object and displays the data to the screen
        based on search parameters indicated in a search bar correlating with a
        specific location on a predetermined hexagonal map. All images used on
        the site are from external sources. In a later use case, this could
        easily be modified to retrieve a JSON object from an API of similar
        structure in order to allow for database storage of location data.
      </p>
    </CardWithImage>

    <CardWithImage imageURL={greyborough}>
      <h1>Greyborough</h1>
      <i>Project Started: 2017</i>
      <p>
        A site created for the Greyborogh homestead. The site was designed to be
        a hub for the owner's of Greyborough to place all of the social media
        links and to tell their story to anyone who was interested in what they
        did. The site consisted of design work such as logo creation, website
        layout and color scheme, as well as some photography. The technologies
        used to build the Greyborogh site consisted of AngularJS, JavaScript,
        HTML, CSS, Yeoman, Grunt, Sass, Gulp, and Heroku.
      </p>
    </CardWithImage>

    <CardWithImage imageURL={serviceMasterImg}>
      <a href="http://www.servicemastermedical.com/">
        <h1>Service Master Medical</h1>
      </a>
      <i>Project Started: 2016</i>
      <p>
        Worked with Service Master Medical to update their old site. The owner
        of the site was not looking for anything fancy, so a static site was
        created that showcased all of their products. Specific images were used
        as requested by the owner of Service Master Medical. A new color scheme
        and logo were created for this project as well. Throughout the entire
        process the client was very active and made several design decisions
        about the site. Technologies used to build the site were AngularJS,
        JavaScript, HTML, CSS, Yeoman, Grunt, Sass, Gulp, and Heroku.
      </p>
    </CardWithImage>

    <CardWithImage imageURL={bbashImg}>
      <h1>Barbarian Bash</h1>
      <i>Project Started: 2016</i>
      <p>
        Barbarian Bash is the artistic recreation of an ancient game known as{' '}
        <i>Nine Man's Morris</i>. The game was built by a team of four as a
        competition for a capstone course. Networking/Multiplayer capabilities,
        a functional and easy-to-understand UI design, and an active and
        challenging artificial intelligence were all items that were achieved in
        the creation of the game. The technologies used for this project were C#
        and Unity.
      </p>
    </CardWithImage>

    <CardWithImage imageURL={estariaDb}>
      <a href="http://fourthnode.herokuapp.com">
        <h1>Estaria DB</h1>
      </a>
      <i>Project Started: 2015</i>
      <p>
        A web app that was created as a database lookup for a gaming group. It
        contained several random item generators for names of places, things,
        and people. The app included a JSON object full of data that needed to
        be sorted through and displayed based on a user's search criteria.
      </p>
    </CardWithImage>

    <CardWithImage imageURL={designWork}>
      <h1>Graphic Design Work</h1>
      <p>
        Digital design and branding are at the center of client work and set
        apart a programmer from a web developer. Being able to offer clients the
        convenience of a "one stop shop" allows for a consistent website that
        isn't affected by the diluting of information between a designer and a
        developer. Often when working with clients, art work is required to
        create a full and complete website at an affordable cost. This allows
        the client to forgo hiring a designer specifically for the site. A flat,
        minimalist design style is crucial for the functionality of the site to
        speak for its self.
      </p>
    </CardWithImage>

    <CardWithImage imageURL={photography}>
      <a href="https://www.instagram.com/sir_tyz">
        <h1>Photography</h1>
      </a>
      <p>
        Not all clients want an illustrated look. Many times to achieve a more
        professional appearance photography is used in place of illustration. If
        a client has a brick and mortar presence they will often want to show
        images of their business as part of the site's design. By working
        directly with the developer to get their local images, a client's
        experience can be streamlined.
      </p>
    </CardWithImage>
  </div>
)

export default Work
