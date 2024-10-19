import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={Logo} alt="Ghomanewala" />
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
