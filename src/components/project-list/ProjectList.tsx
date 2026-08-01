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
                <div className="project-card-img">
                  <img
                    src={project.image}
                    className="w-100"
                    alt={project.title}
                  />
                </div>

                <div className="d-flex justify-content-between w-100 mb-3">
                  <h3 className="mb-0">{project.title}</h3>

                  <a href="#" className="btn btn-dark">
                    View Project
                  </a>
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
