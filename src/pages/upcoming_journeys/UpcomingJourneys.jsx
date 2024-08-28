import { useState } from "react";
import { PortalComponent, UJCard } from "../../components";
import Bali from "../../assets/bali.jpg";
import Sea from "../../assets/sea.jpg";
import Gate from "../../assets/gate.jpg";
import Raulling from "../../assets/raulling.jpg";
import Bush from "../../assets/bush.jpg";
import Julien from "../../assets/julien.jpg";
import "./UpcomingJourneys.css";

const UpcomingJourneys = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <section>
      <h2 className="txt_algn_center">Upcoming Journeys</h2>
      <div className="UJ_container">
        <UJCard
          setIsPortalOpen={setIsPortalOpen}
          image={Bali}
          heading="Bali"
          description="This is bali"
        />
        <UJCard
          setIsPortalOpen={setIsPortalOpen}
          image={Sea}
          heading="Sea"
          description="This is Sea"
        />
        <UJCard
          setIsPortalOpen={setIsPortalOpen}
          image={Gate}
          heading="Gate"
          description="This is Gate"
        />
        <UJCard
          setIsPortalOpen={setIsPortalOpen}
          image={Bush}
          heading="Bush"
          description="This is Bush"
        />
        <UJCard
          setIsPortalOpen={setIsPortalOpen}
          image={Julien}
          heading="Julien"
          description="This is Julien"
        />
        <UJCard
          setIsPortalOpen={setIsPortalOpen}
          image={Raulling}
          heading="Raulling"
          description="This is Raulling"
        />
      </div>
      {isPortalOpen && (
        <PortalComponent>
          <>
            <div className="modal-overlay"></div>
            <div className="modal-content">
              <>
                <p>
                  Please WhatApp to this number +91 0000000000 for more details.
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
