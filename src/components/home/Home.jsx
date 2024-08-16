import React from "react";
import { Card } from "../card/Card";
import "./Home.css";
import { BackgroundSection } from "../background_section/BackgroundSection";

const Home = () => {
  return (
    <div className="home">
      <BackgroundSection />
      <h1>Our Services</h1>
      <div className="card-container">
        <Card
          image="https://via.placeholder.com/300"
          title="Service One"
          description="Brief description of Service One."
          details="Additional details about Service One."
          buttonText="Learn More"
        />
        <Card
          image="https://via.placeholder.com/300"
          title="Service Two"
          description="Brief description of Service Two."
          details="Additional details about Service Two."
          buttonText="Learn More"
        />
      </div>
    </div>
  );
};

export { Home };
