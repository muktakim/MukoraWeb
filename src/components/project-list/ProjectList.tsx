import "./project-list.scss";
import projects from "../../data/projects.json";

function ProjectList() {
  return (
    <div className="projects-list">
      <div className="container-lg">
        <div className="row g-2">
          {projects.map((project) => (
            <div className="col-md-6 project-col" key={project.id}>
              <div className="card project-card">
                <div className="project-card-header">
                  <h3 className="mb-0">{project.title}</h3>
                  <span className="me-auto">/{project.year}</span>
                  <div className="pc-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="project-card-img">
                  <img
                    src={project.image}
                    className="w-100"
                    alt={project.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
