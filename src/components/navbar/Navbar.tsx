import { Link } from "react-router-dom";
import Logo from "/images/logo3.svg";
import "./navbar.scss";
import { useEffect, useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCtaActive, setIsCtaActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Add class after 50px scroll
      setIsCtaActive(window.scrollY > 500); // Add class after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={
          isScrolled
            ? "navbar navbar-expand-md scrolled"
            : "navbar navbar-expand-md"
        }
      >
        <div className="container-lg">
          <Link className="navbar-brand" to="/">
            <img src={Logo} width={50} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                  <span>01</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                  <span>02</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                  <span>03</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                  <span>05</span>
                </Link>
              </li>
            </ul>
            <button className="btn btn-dark d-flex gap-1 align-items-center pe-3">
              Book a call
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </nav>
      <a href=""
        className={
          isCtaActive
            ? "btn cta-btn active"
            : "btn cta-btn"
        }>
        <Phone size={18} />
      </a>
    </>
  );
}

export default Navbar;
