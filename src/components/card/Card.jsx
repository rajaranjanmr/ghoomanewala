import React from "react";
import "./Card.css"; // Import the CSS file for styling

const Card = ({ image, title, description, details, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {details && <p className="card-details">{details}</p>}
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export { Card };
