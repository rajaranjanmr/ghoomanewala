import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css"; // Import the CSS file for styling

const Card = ({ image, title, description, buttonText }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button
          className="card-button"
          onClick={() => {
            navigate("/upcoming-journeys");
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export { Card };
