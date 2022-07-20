type CardProps = {
  title: string;
  description: string;
  site: string;
  repo: string;
  image: string;
  altText: string;
};

const ProjectCard = ({
  title,
  description,
  site,
  repo,
  image,
  altText,
}: CardProps) => {
  const path = require(`../assets/projects/${image}`);

  return (
    <div className="project">
      <div className="info">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="links">
          <a href={`https://${site}`} target="_blank">
            Site
          </a>
          <a href={`https://${repo}`} target="_blank">
            Code
          </a>
        </div>
      </div>
      <div className="project-image">
        <img src={path} alt={altText}></img>
      </div>
    </div>
  );
};

export default ProjectCard;
