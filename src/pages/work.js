import React from 'react'
import Link from 'gatsby-link'
import CardWithImage from '../components/CardWithImage'
import serviceMasterImg from '../Images/serviceMasterMedicalScreenshot.jpg'
import photography from '../Images/photographyScreenShot.jpg'
import designWork from '../Images/designWork.jpg'
import greyborough from '../Images/greyboroughScreenShot.jpg'
import estariaDb from '../Images/estariaDb.jpg'
import ButtonLink from '../components/ButtonLink'

const Work = () => (
  <div>
    <CardWithImage>
      <h1>Barbarian Bash</h1>
      <p>
        Barbarian Bash is the artistic recreation of an ancient game known as{' '}
        <i>Nine Man's Morris</i>. The game was built on a team of four as a
        competition for a capstone course. Networking/Multiplayer capabilities,
        a functional and easy-to-understand UI design, and an active and
        challenging artificial intelligence were all items that were achieved in
        the creation of the game. The technologies used for this project were C#
        and Unity.
      </p>
    </CardWithImage>

    <CardWithImage imageURL={greyborough}>
      <h1>Greyborough</h1>
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

    <CardWithImage imageURL={estariaDb}>
      <h1>Estaria DB</h1>
      <p>
        A web app that was created as a database lookup for a gaming group.
        Contained several random item generators for names of places, things,
        and people. Included a JSON object full of data that needed to be sorted
        through and displayed based on a user's search criteria.
      </p>
    </CardWithImage>

    <CardWithImage imageURL={serviceMasterImg}>
      <h1>Service Master Medical</h1>
      <p>
        Worked with Service Master Medical to update their old and dated site.
        The owner of the site was not looking for anything fancy, so a static
        site was created that showcased all of their products. Specific images
        were mandatory to be used as dictated by the owner of Service Master
        Medical. Color Scheme and a new logo were created for this project as
        well. Throughout the entire process the client was very active and made
        several design decisions about the site. Technologies used to build the
        site were AngularJS, JavaScript, HTML, CSS, Yeoman, Grunt, Sass, Gulp,
        and Heroku.
      </p>
    </CardWithImage>

    <CardWithImage imageURL={designWork}>
      <h1>Graphic Design Work</h1>
      <p>
        Digital design and branding are something that is at the center of
        client work and that really sets apart a programmer from a web
        developer. Being able to offer clients the convenience of a "one stop
        shop" allows for a consistent website that isn't affected by the
        diluting of information between a designer and a developer. Often when
        working with clients, art work is required to create a full and complete
        website at an affordable cost so that the client doesn't have to get a
        designer specifically for the site. A flat, minimalist design style is
        crucial allow the functionality of the site to speak for it's self.
      </p>
    </CardWithImage>

    <CardWithImage imageURL={photography}>
      <h1>Photography</h1>
      <p>
        Not all websites want an illustrated look. Many times to achieve a more
        professional appearance, a large amount of photography is used. If a
        client is local, many times, they will want the ability to show images
        of their business on the site as part of the site's design. An entry
        level of knowledge of photography can enhance the experience of the
        client, by being able to work directly with the developer to get their
        local images.
      </p>
    </CardWithImage>
  </div>
)

export default Work
