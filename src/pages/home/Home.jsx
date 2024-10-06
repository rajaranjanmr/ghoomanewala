import React from "react";
import { BackgroundSection, Card } from "../../components";
import { home } from "../../data/home";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <BackgroundSection />
      <h1>Our Services</h1>
      <div className="card-container">
        {home.map(({ image, urlKey, name, description, buttonText }) => {
          return (
            <Card
              image={image}
              urlKey={urlKey}
              title={name}
              description={description}
              buttonText={buttonText}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Home };
