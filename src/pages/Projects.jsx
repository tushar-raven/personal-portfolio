import Project from "../components/Project";
import { projectData } from "../data/projectsData";

const Projects = () => {
  const allProjects = projectData;

  const projectsArray = [];

  for (let i = 0; i < allProjects.length; i++) {
    projectsArray.push(<Project projectData={allProjects[i]} key={i} />);
  }

  return (
    <div>
      <div className="project-page-heading">
        My&nbsp;<span>Projects</span>
      </div>
      <div className="projects">{projectsArray}</div>
    </div>
  );
};

export default Projects;
