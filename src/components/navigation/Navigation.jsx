import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className='nav'>
      <Link to="/">
        <h1>Ghoomanewala</h1>
      </Link>
    </nav>
  );
};

export { Navigation };
