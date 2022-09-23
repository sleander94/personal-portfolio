import { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <section id="projects">
      <div className="projects-header">
        <div></div>
        <h1>Projects</h1>
        <div></div>
      </div>
      <div className="projects-container">
        <ProjectCard
          title="Summit Snow Alerts"
          technologies={['React', 'Typescript', 'Express', 'MongoDB']}
          description="Full stack app notifying users of snow storms at their favorite ski resorts."
          features={[
            'Update selected mountains, days and times, and contact information.',
            'Receive text/email alerts when snow is forecast at one of your mountains.',
            'Hosted on DigitalOcean Droplet server.',
          ]}
          site="summitsnowalerts.com"
          repo="github.com/sleander94/summitsnowalerts"
          desktopImage="summitsnowalerts-desktop.webp"
          mobileImage="summitsnowalerts-mobile.webp"
          altText="snow alerts preview"
          alternate={false}
        />
        <ProjectCard
          title="We Spy"
          technologies={['React', 'Typescript', 'Firebase', 'Sass']}
          description="Full stack app allowing users to create and share their own photo hunt games."
          features={[
            'Upload an image and mark hidden items to create a puzzle.',
            'Complete puzzles by finding all the items.',
            'Share your score on the leaderboards.',
          ]}
          site="wespy.app"
          repo="github.com/sleander94/we-spy"
          desktopImage="wespydesktop.webp"
          mobileImage="wespymobile.webp"
          altText="we spy preview"
          alternate={true}
        />
        <ProjectCard
          title="Park at a Glance"
          technologies={['React', 'Typescript', 'Tailwind']}
          description="Front end app displaying important, up-to-date information about America's National Parks and Monuments in one place."
          features={[
            'Look up any National Park or Monument using the search feature.',
            'Get weekly weather, alerts, news, and campground information on a single page.',
            'Follow links to get directions or reserve campgrounds.',
          ]}
          site="parkataglance.com"
          repo="github.com/sleander94/park-at-a-glance"
          desktopImage="parkataglancedesktop.webp"
          mobileImage="parkataglancemobile.webp"
          altText="park at a glance preview"
          alternate={false}
        />
        {!showMore && (
          <button type="button" onClick={() => setShowMore(true)}>
            View More Projects
          </button>
        )}
        {showMore && (
          <ProjectCard
            title="MERN Blog"
            technologies={['Express', 'MongoDB', 'Material-UI']}
            description="Full stack personal blog for tracking leetcode solutions."
            features={[
              'Custom Express REST API allowing CRUD operations. Connected to React front end.',
              'User authentication handled with passport JSON web token.',
              'Signed in users can comment. Only admins can create and delete posts.',
              'Hosted on Heroku.',
            ]}
            site="sleepy-springs-58716.herokuapp.com/posts"
            repo="github.com/sleander94/blog-api"
            desktopImage="MERNblogdesktop.webp"
            mobileImage="MERNblogmobile.webp"
            altText="MERN blog preview"
            alternate={true}
          />
        )}
        {showMore && (
          <ProjectCard
            title="CV Generator"
            technologies={['React', 'Javascript']}
            description="Front end app to generate a customized CV."
            features={[
              'View live preview of CV that updates with user input.',
              'Add and remove work experience and education.',
              'Download pdf of resume using html2canvas and jspdf.',
            ]}
            site="sleander94.github.io/cv-app/"
            repo="github.com/sleander94/cv-app"
            desktopImage="cvgeneratordesktop.webp"
            mobileImage="cvgeneratormobile.webp"
            altText="cv generator preview"
            alternate={false}
          />
        )}
        {showMore && (
          <ProjectCard
            title="Hunt for Legends"
            technologies={['React', 'Javascript', 'Firebase']}
            description="My first photo tagging app. Choose from 3 premade levels."
            features={[
              'Find all the hidden characters to record your time.',
              'Upload your score to the leaderboard and see how you compare.',
            ]}
            site="hunt-for-legends-3f7c3.web.app/home"
            repo="github.com/sleander94/hunt-for-legends"
            desktopImage="huntforlegends-desktop.webp"
            mobileImage="huntforlegends-mobile.webp"
            altText="hunt for legends preview"
            alternate={true}
          />
        )}
        {showMore && (
          <ProjectCard
            title="Shopping Cart"
            technologies={['React', 'Javascript']}
            description="Front end mock storefront for outdoor brand."
            features={[
              'Add and remove items from shopping cart.',
              'View items in cart with calculated total price.',
            ]}
            site="sleander94.github.io/shopping-cart/#/home"
            repo="github.com/sleander94/shopping-cart"
            desktopImage="outdoorstore-desktop.webp"
            mobileImage="outdoorstore-mobile.webp"
            altText="outdoor store preview"
            alternate={false}
          />
        )}
        {showMore && (
          <button type="button" onClick={() => setShowMore(false)}>
            View Less Projects
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
