import { useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-header">
        <div></div>
        <h1>Projects</h1>
        <div></div>
      </div>
      <div className="project-container">
        <ProjectCard
          title="We Spy"
          description="Full stack app allowing users to built and share their own photo hunt games. Build with React, Typescript, and Firebase."
          site="wespy.app"
          repo="github.com/Scott-Coates-Org/solo-project-sleander94"
          image="wespy.gif"
          altText="we spy demo"
        />
        <ProjectCard
          title="Park At A Glance"
          description="Front end app that uses multiple APIs to display important information about America's
          National Parks in one place. Built with React, Typescript, and Tailwind."
          site="parkataglance.com"
          repo="github.com/sleander94/park-at-a-glance"
          image="parkataglance.gif"
          altText="park at a glance demo"
        />
        <ProjectCard
          title="Hunt for Legends"
          description="Full stack photo tagging app with leaderboards. Built with React and Firebase."
          site="hunt-for-legends-3f7c3.web.app/home"
          repo="github.com/sleander94/hunt-for-legends"
          image="huntforlegends.gif"
          altText="hunt for legends demo"
        />
        <ProjectCard
          title="CV Generator"
          description="Front end app that converts user input into downloadable PDF. Built with React."
          site="sleander94.github.io/cv-app/"
          repo="github.com/sleander94/cv-app"
          image="cvgenerator.gif"
          altText="CV generator demo"
        />
        <ProjectCard
          title="Leetcode Blog"
          description="Full stack blog app with custom REST API and jwt authentication. Built with MERN stack and MaterialUI."
          site="sleepy-springs-58716.herokuapp.com/posts"
          repo="github.com/sleander94/blog-react-app"
          image="leetcodeblog.gif"
          altText="Blog demo"
        />
        <ProjectCard
          title="Outdoor Brand Storefront"
          description="Front end mock storefront for outdoor brand with shopping cart. Built using React."
          site="sleander94.github.io/shopping-cart/#/home"
          repo="github.com/sleander94/shopping-cart"
          image="outdoorstore.gif"
          altText="Outdoor Store demo"
        />
        <ProjectCard
          title="Enchanted Emporium"
          description="Back end inventory management app. Users can perform CRUD operations on magical fantasy items. Built with Express, MongoDB, and PUG."
          site="https://pure-eyrie-35212.herokuapp.com/emporium"
          repo="https://github.com/sleander94/enchanted-emporium"
          image="enchantedemporium.gif"
          altText="Enchanted Emporium demo"
        />
      </div>
    </section>
  );
};

export default Projects;
