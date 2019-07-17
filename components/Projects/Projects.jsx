import "./Projects.scss";
import projectData from "./project-data";
import Project from "./Project";

const Projects = () => (
  <section className="projects">
    <h2>projects</h2>
    <div className="grid">
      {projectData.length > 0 &&
        projectData.map((project, i) => <Project project={project} key={i} />)}
    </div>
  </section>
);

export default Projects;
