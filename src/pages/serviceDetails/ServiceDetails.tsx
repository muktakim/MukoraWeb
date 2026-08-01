import './service-details.scss';
import { ChevronRight } from "lucide-react";
function ServiceDetails() {
  return (
    <>
      <section className="page-header">
        <div className="container-lg">
          <h1>Automation Marketing</h1>
          <p><span>Expert insights on web design, branding, and</span>
            <span>digital strategy to help your business stand out.</span></p>
          <p className="ph-small-text">From design principles to technical optimizations—everything you need for digital success.</p>
        </div>
      </section>
      <section className="service-details py-5">
        <div className="container-lg">
          <div className="mb-5">
            <img src="https://cdn.prod.website-files.com/69403ed6d70919e8711c1698/6942158f4a0485b83f93ff0f_Service%20Banner%20Image%2001_compressed-p-1600.webp" className="w-100 rounded-5" alt="" />
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <h2>Service Overview:</h2>
            </div>
            <div className="col-md-8 ps-lg-4">
              <p>Our service is designed to deliver comprehensive solutions tailored to meet your unique needs. From start to finish, we focus on efficiency, quality, and exceptional customer experience. Whether it’s streamlining processes, providing expert guidance, or offering reliable support, our service ensures that you achieve your goals with confidence and ease.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h2>Service Overview:</h2>
            </div>
            <div className="col-md-8 ps-lg-4">
              <p>Our service is designed to deliver comprehensive solutions tailored to meet your unique needs. From start to finish, we focus on efficiency, quality, and exceptional customer experience. Whether it’s streamlining processes, providing expert guidance, or offering reliable support, our service ensures that you achieve your goals with confidence and ease.</p>
              <h3>Marketing & Strategy:</h3>
              <ul className="mb-4">
                <li><ChevronRight size={20} /> Develop data-driven marketing campaigns that reach the right audience</li>
                <li><ChevronRight size={20} /> Define and strengthen your brand identity to differentiate your business</li>
                <li><ChevronRight size={20} /> Continuously track, measure, and optimize marketing efforts using actionable</li>
                <li><ChevronRight size={20} /> Align marketing initiatives across multiple channels, ensuring a cohesive message</li>
              </ul>
              <h3>Marketing Automation</h3>
              <ul>
                <li><ChevronRight size={20} /> Automatically engage and nurture prospects through personalized email</li>
                <li><ChevronRight size={20} /> Segment audiences based on behavior, preferences, and demographics</li>
                <li><ChevronRight size={20} /> Schedule and execute multi-channel campaigns seamlessly, reducing manual effort</li>
                <li><ChevronRight size={20} /> Monitor campaign results in real-time, enabling data-driven</li>
              </ul>
            </div>
          </div>
          <div className="my-5">
            <img src="https://cdn.prod.website-files.com/69403ed6d70919e8711c1698/6942151587d8a7897d9ff53d_Rich%20Image_compressed-p-1600.webp" className="w-100 rounded-5" alt="" />
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <h2>Our Vision</h2>
            </div>
            <div className="col-md-8 ps-lg-4">
              <p>We specialize in designing bespoke automation workflows that map directly to your customer journey, from initial awareness to final conversion and retention. This service moves beyond simple scheduling to create intelligent, multi-step sequences that nurture leads based on their specific behavior, actions, and engagement level with your content, ensuring timely and hyper-relevant communication.</p>
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
