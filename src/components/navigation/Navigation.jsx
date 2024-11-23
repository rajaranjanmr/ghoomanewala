import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import Logo2 from '../../assets/logo_pic.jpeg';
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img className="logoImg" src={Logo} alt="Ghomanewala" />
        <img className="logoImgPic" src={Logo2} alt="Ghomanewala_pic" />
      </Link>
      <div className="nav_items">
        <p>
          <Link className="color_skyblue" to="/about-us">
            About Us
          </Link>
        </p>
        <p>
          <Link className="color_skyblue" to="/services">
            Services
          </Link>
        </p>
        <p>
          <Link className="color_skyblue" to="/contact-us">
            Contact Us
          </Link>
        </p>
      </div>
    </nav>
  );
};

export { Navigation };
