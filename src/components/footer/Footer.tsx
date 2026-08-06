import './footer.scss';
import CTA from "../CTA";
import { Link } from "react-router-dom";
import Logo from "/images/logo3.svg";
function Footer() {
    return (
        <>
            <CTA />
            <footer className="d-none">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-2">
                            <h3 className="footer-heading">Services</h3>
                            <ul className="footer-menu">
                                <li>
                                    <a href="">UI/UX Design</a>
                                </li>
                                <li>
                                    <a href="">UI/UX Design</a>
                                </li>
                                <li>
                                    <a href="">UI/UX Design</a>
                                </li>
                                <li>
                                    <a href="">UI/UX Design</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h3 className="footer-heading">Company</h3>
                            <ul className="footer-menu">
                                <li>
                                    <a href="">About Us</a>
                                </li>
                                <li>
                                    <a href="">Projects</a>
                                </li>
                                <li>
                                    <a href="">Blog</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h3 className="footer-heading">Company</h3>
                            <ul className="footer-menu">
                                <li>
                                    <a href="">About Us</a>
                                </li>
                                <li>
                                    <a href="">Projects</a>
                                </li>
                                <li>
                                    <a href="">Blog</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h2>Let's build something great together</h2>
                            <Link to="" className="btn btn-primary">Let's Begin</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
