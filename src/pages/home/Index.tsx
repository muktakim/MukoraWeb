import { Footprints, Zap } from "lucide-react";
import "./home.scss";
import Pricing from "../../components/pricing/Pricing";
import FAQ from "../../components/faq/FAQ";
import Logo from "/images/logo3.svg";
function Home() {
  return (
    <>
      <section className="hero">
        <div className="container-lg h-100">
          <div className="hero-content">
            <div className="d-flex justify-content-between hero-top">
              <span className="copyright">(©2018 - ©2026)</span>
              <span className="">Based In India</span>
            </div>
            <h1 className="heading">Creative Studio</h1>
            <div className="d-flex justify-content-between">
              <div className="reviews">
                <div className="review-avatars">
                  <img src="/images/review-avatar1.png" alt="" />
                  <img src="/images/review-avatar2.png" alt="" />
                  <img src="/images/review-avatar3.png" alt="" />
                  <img src="/images/review-avatar4.png" alt="" />
                  <img src="/images/review-avatar5.png" alt="" />
                </div>
                <div>
                  <span>4.9/5</span> <br />
                  <span className="opacity-75">BASED ON</span> 230 REVIEWS
                </div>
              </div>
              <h2>FOR MARKETING & B2B</h2>
            </div>
            <div className="d-flex justify-content-between align-items-end hero-bottom">
              <p className="mb-0">
                We build, <span className="opacity-50">optimize</span>, and
                scale marketing engines that generate pipeline and improve
                Marketing ROI
              </p>
              <ul className="mb-0">
                <li>
                  <span>01)</span> Digital Transformation
                </li>
                <li>
                  <span>02)</span> Digital Consultation
                </li>
                <li>
                  <span>03)</span> Operational efficency
                </li>
                <li>
                  <span>04)</span> SEO Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container-lg">
          <div className="row g-2">
            <div className="col-md-6 project-col">
              <div className="card project-card">
                <div className="project-card-img">
                  <img
                    src="https://framerusercontent.com/images/RUrK8ZUZRQJ9Bad4bhvc3x2izXI.png"
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-between w-100 mb-3">
                  <h3 className="mb-0">Urban Glow</h3>
                  <a href="" className="btn text-white">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 project-col">
              <div className="card project-card">
                <div className="project-card-img">
                  <img
                    src="https://framerusercontent.com/images/1mdpVKwT46ZpICeAgFwJq9chSc0.jpg"
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-between w-100 mb-3">
                  <h3 className="mb-0">Urban Glow</h3>
                  <a href="" className="btn text-white">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 project-col">
              <div className="card project-card">
                <div className="project-card-img">
                  <img
                    src="https://framerusercontent.com/images/aH13BQgAypCGHC8DdsnDZT88aq4.png"
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-between w-100 mb-3">
                  <h3 className="mb-0">Urban Glow</h3>
                  <a href="" className="btn text-white">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 project-col">
              <div className="card project-card">
                <div className="project-card-img">
                  <img
                    src="https://framerusercontent.com/images/R5g3Fh7k9NdXRVklwXNwi0Vp7qQ.png"
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-between w-100 mb-3">
                  <h3 className="mb-0">Urban Glow</h3>
                  <a href="" className="btn text-white">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 project-col">
              <div className="card project-card">
                <div className="project-card-img">
                  <img
                    src="https://framerusercontent.com/images/RUrK8ZUZRQJ9Bad4bhvc3x2izXI.png"
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-between w-100 mb-3">
                  <h3 className="mb-0">Urban Glow</h3>
                  <a href="" className="btn text-white">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 project-col">
              <div className="card project-card">
                <div className="project-card-img">
                  <img
                    src="https://framerusercontent.com/images/1mdpVKwT46ZpICeAgFwJq9chSc0.jpg"
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-between w-100 mb-3">
                  <h3 className="mb-0">Urban Glow</h3>
                  <a href="" className="btn text-white">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 project-col">
              <div className="card project-card">
                <div className="project-card-img">
                  <img
                    src="https://framerusercontent.com/images/aH13BQgAypCGHC8DdsnDZT88aq4.png"
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-between w-100 mb-3">
                  <h3 className="mb-0">Urban Glow</h3>
                  <a href="" className="btn text-white">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 project-col">
              <div className="card project-card">
                <div className="project-card-img">
                  <img
                    src="https://framerusercontent.com/images/R5g3Fh7k9NdXRVklwXNwi0Vp7qQ.png"
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-between w-100 mb-3">
                  <h3 className="mb-0">Urban Glow</h3>
                  <a href="" className="btn text-white">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="services">
        <div className="service-card">
          <div className="container-lg">
            <div className="d-flex align-items-center justify-content-between">
              <span className="service_no">1)</span>
              <h3 className="service-title">Web Design</h3>
              <a href="" className="btn text-white">View Services</a>
            </div>
            <div className="service-card-content">
              <img src="https://cdn.prod.website-files.com/69403ed6d70919e8711c1698/6942150f0e7c5f335fe61633_Service%20Image%2004_compressed.webp" alt="" />
              <div>
                <h4>21+ <span>/projects done</span></h4>
                <p>Streamline your workflows and nurture leads around the clock with intelligent, personalized communication systems.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="container-lg">
            <div className="d-flex align-items-center justify-content-between">
              <span className="service_no">1)</span>
              <h3 className="service-title">Web Design</h3>
              <a href="" className="btn text-white">View Services</a>
            </div>
            <div className="service-card-content">
              <img src="https://cdn.prod.website-files.com/69403ed6d70919e8711c1698/6942150f0e7c5f335fe61633_Service%20Image%2004_compressed.webp" alt="" />
              <div>
                <h4>21+ <span>/projects done</span></h4>
                <p>Streamline your workflows and nurture leads around the clock with intelligent, personalized communication systems.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="container-lg">
            <div className="d-flex align-items-center justify-content-between">
              <span className="service_no">1)</span>
              <h3 className="service-title">Web Design</h3>
              <a href="" className="btn text-white">View Services</a>
            </div>
            <div className="service-card-content">
              <img src="https://cdn.prod.website-files.com/69403ed6d70919e8711c1698/6942150f0e7c5f335fe61633_Service%20Image%2004_compressed.webp" alt="" />
              <div>
                <h4>21+ <span>/projects done</span></h4>
                <p>Streamline your workflows and nurture leads around the clock with intelligent, personalized communication systems.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="container-lg">
            <div className="d-flex align-items-center justify-content-between">
              <span className="service_no">1)</span>
              <h3 className="service-title">Web Design</h3>
              <a href="" className="btn text-white">View Services</a>
            </div>
            <div className="service-card-content">
              <img src="https://cdn.prod.website-files.com/69403ed6d70919e8711c1698/6942150f0e7c5f335fe61633_Service%20Image%2004_compressed.webp" alt="" />
              <div>
                <h4>21+ <span>/projects done</span></h4>
                <p>Streamline your workflows and nurture leads around the clock with intelligent, personalized communication systems.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="container-lg">
            <div className="d-flex align-items-center justify-content-between">
              <span className="service_no">1)</span>
              <h3 className="service-title">Web Design</h3>
              <a href="" className="btn text-white">View Services</a>
            </div>
            <div className="service-card-content">
              <img src="https://cdn.prod.website-files.com/69403ed6d70919e8711c1698/6942150f0e7c5f335fe61633_Service%20Image%2004_compressed.webp" alt="" />
              <div>
                <h4>21+ <span>/projects done</span></h4>
                <p>Streamline your workflows and nurture leads around the clock with intelligent, personalized communication systems.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="container-lg">
            <div className="d-flex align-items-center justify-content-between">
              <span className="service_no">1)</span>
              <h3 className="service-title">Web Design</h3>
              <a href="" className="btn text-white">View Services</a>
            </div>
            <div className="service-card-content">
              <img src="https://cdn.prod.website-files.com/69403ed6d70919e8711c1698/6942150f0e7c5f335fe61633_Service%20Image%2004_compressed.webp" alt="" />
              <div>
                <h4>21+ <span>/projects done</span></h4>
                <p>Streamline your workflows and nurture leads around the clock with intelligent, personalized communication systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="idea">
        <div className="container-lg">
          <div className="idea-flex-wrap row g-3 px-5 mx-0">
            <div className="col-md-4">
              <div className="idea-item-wrap _01">
                <h3 className="idea-item-number">01)</h3>

                <div className="idea-item-btm-wrap">
                  <h3 className="idea-item-title">Refined Concept</h3>
                  <p className="idea-item-details">
                    This stage focuses on crystallizing the core idea and ensuring its
                    viability before significant resources are committed.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="idea-item-wrap _02">
                <h3 className="idea-item-number">02)</h3>

                <div className="idea-item-btm-wrap">
                  <h3 className="idea-item-title">Scale Operation</h3>
                  <p className="idea-item-details">
                    Scaling involves expanding the successful prototype into a full, robust
                    product or service that can handle a growing demand.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="idea-item-wrap _03">
                <h3 className="idea-item-number">03)</h3>

                <div className="idea-item-btm-wrap">
                  <h3 className="idea-item-title">Gauge User Base</h3>
                  <p className="idea-item-details _03">
                    In this final step, we actively measure how well the solution is being
                    adopted by the target audience.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <FAQ />

      <section className="cta">
        <div className="cta-wrapper">
          <video
            src="https://framerusercontent.com/assets/G0NwzP4bivPvK55b3ubxNslUs.mp4"
            poster="https://framerusercontent.com/images/ZJ6HLYoAxMXsbBJCnggXHSRug.jpg?width=1920&height=1080"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="row m-0 w-100 h-fill align-items-center g-0 justify-content-between">
            <div className="col-md-7 pe-5">
              <div className="common-heading">
                <h2 className="section-heading mb-2">Let’s talk.</h2>
                <p className="mb-0">
                  Tell us about your project
                  <span>
                    —whether it’s a website,
                    <br />
                    SEO, or marketing.
                  </span>
                </p>
              </div>
              <hr className="my-4 pt-2 pb-1" />
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="card">
                    <h4 className="fs-5 d-flex align-items-center gap-1">
                      <Zap /> Quick response.
                    </h4>
                    <p className="opacity-75 w-100 mb-0">
                      If you’re ready to create and collaborate, we’d love to
                      hear from you.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <h4 className="fs-5 d-flex align-items-center gap-1">
                      <Footprints /> Clear next steps.
                    </h4>
                    <p className="opacity-75 w-100 mb-0">
                      If you’re ready to create and collaborate, we’d love to
                      hear from you.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <h4 className="fs-5 d-flex align-items-center gap-1">
                      <Footprints /> Clear next steps.
                    </h4>
                    <p className="opacity-75 w-100 mb-0">
                      If you’re ready to create and collaborate, we’d love to
                      hear from you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 h-fill">
              <div className="cta-contact h-fill">
                <img src={Logo} width={36} className="d-block mb-2" alt="" />
                <h3>Have a project <span>in mind?</span></h3>
                <form action="" className="w-100">
                  <div className="form-group mb-3">
                    <label htmlFor="">Your name*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="">E-mail*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="hello@site.com"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="">Message</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Message"
                    />
                  </div>
                  <button className="btn w-100 text-white">Send Message</button>
                  <small className="opacity-75 d-block mt-3">By submitting, you agree to our <a href="">Terms</a> and <a href="">Privacy Policy</a>.</small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
// f0f0f0
// dcdcdc
// https://scalient.webflow.io/service
export default Home;
