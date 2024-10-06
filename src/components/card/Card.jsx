import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ image, urlKey, title, description, buttonText }) => {
  const navigate = useNavigate();

  const goToUpcomingJourney = (urlId) => {
    navigate(`/upcoming-journeys/${urlId}`);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description truncated-text">{description}</p>
        <button
          className="card-button"
          onClick={() => {
            goToUpcomingJourney(urlKey);
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export { Card };
