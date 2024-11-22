import { useState } from "react";
import { PortalComponent } from "../../components";
import { ujData } from "../../data/uj_data";
import { useParams } from "react-router-dom";
import "./UpcomingJourneys.css";

const UpcomingJourneys = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const { journeysId } = useParams();

  const { description, upcoming_journeys } = ujData[journeysId];

  return (
    <section>
      {/* <p className="my_2rem">{description}</p>
      <h2 className="text_align_center">Upcoming Journeys</h2>
      <div className="uj_container">
        {upcoming_journeys.map(({ image, heading, description }) => (
          <UJCard
            setIsPortalOpen={setIsPortalOpen}
            image={image}
            heading={heading}
            description={description}
          />
        ))}
      </div> */}

      <div className="uj_bg_image">
        <div className="overlay">
          <div className="container">
            <h1 className="uj_h1 text_align_center">Upcoming Journeys</h1>
            <p className="uj_para">{description}</p>
            <div className="text_align_center">
              <button
                className="ujc_button"
                onClick={() => {
                  setIsPortalOpen(true);
                }}
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      {isPortalOpen && (
        <PortalComponent>
          <>
            <div className="modal_overlay"></div>
            <div className="modal_content">
              <>
                <p>
                  Please WhatApp to this number +91 9153982121 for more details.
                </p>
                <button
                  className="uj_modal_button"
                  onClick={() => setIsPortalOpen(false)}
                >
                  Back
                </button>
              </>
            </div>
          </>
          ,
        </PortalComponent>
      )}
    </section>
  );
};

export { UpcomingJourneys };
