import "./home.scss";
import Pricing from "../../components/pricing/Pricing";
import ServicesList from "../../components/services-list/ServicesList";
import Process from "../../components/Process";
import ProjectList from "../../components/project-list/ProjectList";
import FAQ from "../../components/faq/FAQ";
import Logo from "/images/logo3.svg";
import { ChevronRight } from "lucide-react";
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
          <div className="common-heading-wrap">
            <span>// Our best works</span>
            <h2 className="page-heading">Projects</h2>
            <p>We’ve helped businesses across industries achieve their goals. Here are some of our recent projects.</p>
          </div>
        </div>
        <ProjectList />
      </section>
      <section className="services pt-0">
        <div className="container-lg">
          <div className="common-heading-wrap">
            <span>// What we do</span>
            <h2 className="page-heading">Services</h2>
            {/* <p>We’ve helped businesses across industries achieve their goals. Here are some of our recent projects.</p> */}
          </div>
        </div>
        <ServicesList />
      </section>
      <section className="process pt-0">
        <div className="container-lg">
          <div className="common-heading-wrap mb-5">
            <h2 className="page-heading text-center">Process We Follow</h2>
          </div>
        </div>
        <Process />
      </section>
      {/* <Pricing /> */}
      {/* <FAQ /> */}
    </>
  );
}
// f0f0f0
// dcdcdc
// https://scalient.webflow.io/service
export default Home;
