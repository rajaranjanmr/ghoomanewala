import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="au_bg_image">
      <div className="overlay">
        <div className="container">
          <h1 className="text_align_center">About Us</h1>
          <p className="au_para">
            At Ghomanewala, we believe that travel is more than just seeing new
            places—it’s about creating lasting memories, discovering cultures,
            and exploring the world in a way that transforms you. Founded with a
            passion for adventure and a love for people, our mission is to
            provide unique travel experiences tailored to every type of
            traveler.
          </p>
          <p className="au_para">
            Whether you’re seeking a serene beach getaway, an adrenaline-pumping
            adventure, or a cultural immersion in a vibrant city, we’re here to
            make your dream vacation a reality. Our dedicated team of travel
            experts works closely with trusted local partners worldwide to
            curate personalized itineraries that cater to your preferences,
            needs, and budget.
          </p>
          <p className="au_para">
            With us, travel is not just a journey; it’s an experience. From
            planning and booking to support during your trip, we are with you
            every step of the way, ensuring a seamless and unforgettable
            adventure. Let us take care of the details while you focus on
            enjoying the journey.
          </p>
          <p className="au_para">
            Explore the world your way, with Ghomanewala.
          </p>
        </div>
      </div>
    </div>
  );
};

export { AboutUs };
