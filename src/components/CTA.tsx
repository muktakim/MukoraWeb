import { Footprints, Zap } from "lucide-react";
import Logo from "/images/logo3.svg";
function CTA() {
    return (
        <>
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
                                    <button className="btn btn-dark w-100">Send Message</button>
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

export default CTA;
