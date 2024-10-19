import { useState } from "react";
import { PortalComponent, UJCard } from "../../components";
import { ujData } from "../../data/uj_data";
import { useParams } from "react-router-dom";
import "./UpcomingJourneys.css";

const UpcomingJourneys = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const { journeysId } = useParams();
  console.log(journeysId);

  const { description, upcoming_journeys } = ujData[journeysId];

  return (
    <section className="mx_2rem">
      <p className="my_2rem">{description}</p>
      <h2 className="txt_algn_center">Upcoming Journeys</h2>
      <div className="uj_container">
        {upcoming_journeys.map(({ image, heading, description }) => (
          <UJCard
            setIsPortalOpen={setIsPortalOpen}
            image={image}
            heading={heading}
            description={description}
          />
        ))}
      </div>
      {isPortalOpen && (
        <PortalComponent>
          <>
            <div className="modal-overlay"></div>
            <div className="modal-content">
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
