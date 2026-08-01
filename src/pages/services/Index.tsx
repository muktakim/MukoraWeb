import './services.scss';
import ServicesList from "../../components/services-list/ServicesList";
function Services() {
  return (
    <>
      <section className="page-header v2">
        <div className="container-lg">
          <h1>Services</h1>
          <p><span>Expert insights on web design, branding, and</span>
            <span>digital strategy to help your business stand out.</span></p>
          <p className="ph-small-text">From design principles to technical optimizations—everything you need for digital success.</p>
        </div>
      </section>

      <section className="services">
        <ServicesList />
      </section>
    </>
  );
}

export default Services;
