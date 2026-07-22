import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./styles.scss";
import Home from "./pages/home/Index";
import AboutUs from "./pages/about-us/Index";
import Services from "./pages/services/Index";
import ContactUs from "./pages/contact-us/Index";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      {/* All route goes here */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
