type CardProps = {
  title: string;
  technologies: string[];
  description: string;
  features: string[];
  site: string;
  repo: string;
  desktopImage: string;
  mobileImage: string;
  altText: string;
};

const ProjectCard = ({
  title,
  technologies,
  description,
  features,
  site,
  repo,
  desktopImage,
  mobileImage,
  altText,
}: CardProps) => {
  return (
    <div className="project">
      <div className="info">
        <h2>{title}</h2>
        <ul className="technologies">
          {technologies.map((tech) => {
            return <li key={technologies.indexOf(tech)}>{tech}</li>;
          })}
        </ul>
        <p>{description}</p>
        <ul className="features">
          {features.map((feature) => {
            return <li key={features.indexOf(feature)}>{feature}</li>;
          })}
        </ul>
        <div className="links">
          <a href={`https://${site}`} target="_blank">
            Live
          </a>
          <a href={`https://${repo}`} target="_blank">
            Code
          </a>
        </div>
      </div>
      <div className="preview-images">
        <div className="image-container">
          <img
            className="desktop"
            src={require(`../assets/projects/${desktopImage}`)}
            alt={altText + 'desktop'}
          ></img>
          <img
            className="mobile"
            src={require(`../assets/projects/${mobileImage}`)}
            alt={altText + 'mobile'}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
