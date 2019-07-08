import "./Projects.scss";

const Project = props => {
  const { project } = props;
  return (
    <>
      <a href={project.href} target="blank">
        <div className="grid-image">
          <img src={project.img} alt={project.alt} />
        </div>
      </a>
      <div className="grid-desc">
        <a href={project.href} target="blank">
          <h4>{project.heading}</h4>
        </a>
        <ul>
          {project.techStack.length > 0 &&
            project.techStack.map((item, i) => <li key={i}>[ {item} ]</li>)}
        </ul>
        {project.bullets.length > 0 &&
          project.bullets.map((item, i) => <p key={i}>{item}</p>)}
        <a href={project.source} className="source" target="blank">
          SOURCE CODE
        </a>
      </div>
    </>
  );
};

export default Project;
