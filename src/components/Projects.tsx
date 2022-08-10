import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-header">
        <div></div>
        <h1>Projects</h1>
        <div></div>
      </div>
      <div className="projects-container">
        <ProjectCard
          title="We Spy"
          technologies={['React', 'Typescript', 'Firebase', 'Sass']}
          description="Full stack app allowing users to create and share their own photo hunt games."
          features={[
            'Upload an image and mark hidden items to create a puzzle.',
            'Complete puzzles by finding all the items and share your score on the leaderboard.',
          ]}
          site="wespy.app"
          repo="github.com/Scott-Coates-Org/solo-project-sleander94"
          desktopImage="wespydesktop.png"
          mobileImage="wespymobile.png"
          altText="we spy preview"
          alternate={false}
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
          desktopImage="parkataglancedesktop.png"
          mobileImage="parkataglancemobile.png"
          altText="park at a glance preview"
          alternate={true}
        />
        <ProjectCard
          title="MERN Blog"
          technologies={['Express', 'MongoDB', 'Material-UI']}
          description="Full stack personal blog for tracking leetcode solutions."
          features={[
            'Custom Express REST API allowing CRUD operations. Connected to React front end.',
            'User authentication handled with passport JSON web token.',
            'Signed in users can comment. Only admins can create and delete posts.',
            'Front and back ends hosted on Heroku',
          ]}
          site="sleepy-springs-58716.herokuapp.com/posts"
          repo="github.com/sleander94/blog-api"
          desktopImage="MERNblogdesktop.png"
          mobileImage="MERNblogmobile.png"
          altText="MERN blog preview"
          alternate={false}
        />
        <ProjectCard
          title="CV Generator"
          technologies={['React', 'Javascript']}
          description="Front end app to generate a customized CV."
          features={[
            'View live preview of CV that updates with user input',
            'Add and remove work experience and education.',
            'Download pdf of resume using html2canvas and jspdf.',
          ]}
          site="sleander94.github.io/cv-app/"
          repo="github.com/sleander94/cv-app"
          desktopImage="cvgeneratordesktop.png"
          mobileImage="cvgeneratormobile.png"
          altText="cv generator preview"
          alternate={true}
        />
        {/*  
        <ProjectCard
          title="Hunt for Legends"
          description="Full stack photo tagging app with leaderboards. Built with React and Firebase."
          site="hunt-for-legends-3f7c3.web.app/home"
          repo="github.com/sleander94/hunt-for-legends"
          image="huntforlegends.gif"
          altText="hunt for legends demo"
        />
        <ProjectCard
          title="Outdoor Brand Storefront"
          description="Front end mock storefront for outdoor brand with shopping cart. Built using React."
          site="sleander94.github.io/shopping-cart/#/home"
          repo="github.com/sleander94/shopping-cart"
          image="outdoorstore.gif"
          altText="Outdoor Store demo"
        /> */}
      </div>
    </section>
  );
};

export default Projects;
