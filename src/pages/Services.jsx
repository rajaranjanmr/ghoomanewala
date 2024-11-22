import React from "react";
import { home } from "../data/home";
import { Card } from "../components/card/Card";

const Services = () => {
  return (
    <div className="text_align_center">
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

export { Services };
