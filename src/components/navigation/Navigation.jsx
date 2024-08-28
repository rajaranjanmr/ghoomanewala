import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="color_skyblue">Ghoomanewala</h1>
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
