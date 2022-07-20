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
          title="Park At A Glance"
          description="Fullstack app displaying important information about America's
          National Parks in one place."
          site="parkataglance.com"
          repo="github.com/sleander94/park-at-a-glance"
          image="parkataglance.png"
          altText="parkataglance"
        />
      </div>
    </section>
  );
};

export default Projects;
