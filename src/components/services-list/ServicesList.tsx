import "./services-list.scss";
import services from "../../data/services.json";
import { Link } from "react-router-dom";
function ServicesList() {
  return (
    <div className="services-list">
      {services.map((service) => (
        <div className="service-card" key={service.id}>
          <div className="container-lg">
            <div className="d-flex align-items-center justify-content-between">
              <span className="service_no">{service.id})</span>
              <h3 className="service-title">{service.title}</h3>
              <Link to={`/services/${service.slug}`} className="btn btn-dark">
                View Services
              </Link>
            </div>

            <div className="service-card-content">
              <img src={service.image} alt={service.title} />
              <div>
                <h4>
                  {service.projects} <span>/projects done</span>
                </h4>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesList;
