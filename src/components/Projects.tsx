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
          description="Full Stack app allowing users to built and share their own photo hunt games. Build with React, Typescript, and Firebase"
          site="wespy.app"
          repo="https://github.com/Scott-Coates-Org/solo-project-sleander94"
          image="wespy.gif"
          altText="we spy demo"
        />
        <ProjectCard
          title="Park At A Glance"
          description="Front End app that uses multiple APIs to display important information about America's
          National Parks in one place. Built with React, Typescript, and Tailwind"
          site="parkataglance.com"
          repo="github.com/sleander94/park-at-a-glance"
          image="parkataglance.gif"
          altText="park at a glance demo"
        />
        <ProjectCard
          title="Hunt for Legends"
          description="Full Stack photo tagging app with leaderboards. Built with React and Firebase."
          site="hunt-for-legends-3f7c3.web.app/home"
          repo="github.com/sleander94/hunt-for-legends"
          image="huntforlegends.gif"
          altText="hunt for legends demo"
        />
        <ProjectCard
          title="CV Generator"
          description="Front End app that converts user input into downloadable PDF. Built using React"
          site="sleander94.github.io/cv-app/"
          repo="github.com/sleander94/cv-app"
          image="cvgenerator.gif"
          altText="CV generator demo"
        />
      </div>
    </section>
  );
};

export default Projects;
