import PropTypes from "prop-types";

const Project = ({ projectData }) => {
  return (
    <div className="project">
      <div className="project-left">
        <div className="project-name">{projectData.name}</div>
        <div className="stack">
          <span className="tech-stack">Tech Stack: </span>
          {projectData.stack}
        </div>
        <div className="project-description">{projectData.description}</div>
        <div className="project-buttons">
          <a href={projectData.liveLink} rel="noreferrer" target="_blank">
            <button className="live">Live ↗︎</button>
          </a>
          <a href={projectData.sourceLink} rel="noreferrer" target="_blank">
            <button className="source">Source &lt;/&gt;</button>
          </a>
        </div>
      </div>
      <div className="project-right">
        <div className="project-pic-box">
          <img
            className="project-pic"
            src={projectData.image}
            alt={projectData.name}
          />
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  projectData: PropTypes.object.isRequired,
};

export default Project;
