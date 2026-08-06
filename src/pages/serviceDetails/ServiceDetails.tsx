import "./service-details.scss";
import { ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import services from "../../data/services.json";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <h2>Service not found.</h2>;
  }

  return (
    <>
      <section className="page-header">
        <div className="container-lg">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </section>
      <section className="service-details py-5">
        <div className="container-lg">
          <div className="mb-5 rounded-5 overflow-hidden">
            <ParallaxImage
              src={service.image}
              alt={service.title}
              speed={0.5}
              height="600px"
            />
          </div>

          {service.detailContentSections?.map((block, index) => (
            <div className="row mb-4" key={index}>
              <div className="col-md-4">
                <h2>{block.heading}</h2>
              </div>
              <div className="col-md-8 ps-lg-4">
                <p>{block.text}</p>

                {block.sections?.map((section, sIndex) => (
                  <div key={sIndex}>
                    <h3>{section.heading}</h3>
                    <ul className="mb-4">
                      {section.points.map((point, pIndex) => (
                        <li key={pIndex}>
                          <ChevronRight size={20} /> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="my-5 rounded-5 overflow-hidden">
            <ParallaxImage
              src={service.image}
              alt={service.title}
              speed={0.5}
              height="600px" 
            />
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <h2>Our Vision</h2>
            </div>
            <div className="col-md-8 ps-lg-4">
              <p>
                We specialize in designing bespoke automation workflows that map
                directly to your customer journey, from initial awareness to
                final conversion and retention. This service moves beyond simple
                scheduling to create intelligent, multi-step sequences that
                nurture leads based on their specific behavior, actions, and
                engagement level with your content, ensuring timely and
                hyper-relevant communication.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h2>Service Overview:</h2>
            </div>
            <div className="col-md-8 ps-lg-4">
              <div className="row">
                <div className="col-md-3">
                  <div className="card user-stats">
                    <h3>200%</h3>
                    <p>Satisfaction</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card user-stats">
                    <h3>270K+</h3>
                    <p>Project Done</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card user-stats">
                    <h3>230%</h3>
                    <p>Increased Organic</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card user-stats">
                    <h3>3M</h3>
                    <p>Revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetails;
