import React from "react";
import { termsAndConditions } from "../data/terms_and_conditions";

const TermsAndConditions = () => {
  return (
    <section className="mx_2rem">
      <h1 className="text_align_center">Terms and Conditions</h1>
      <p>
        Welcome to ghomanewala.com! By using our website and booking services,
        you agree to comply with and be bound by the following terms and
        conditions. Please read them carefully before using our services. If you
        do not agree to these terms, you should not proceed with bookings or
        other activities on our platform.
      </p>
      {termsAndConditions.map(
        ({ heading, pointOne, pointTwo, pointThree }, idx) => {
          return (
            <div key={heading}>
              <h2>{`${idx + 1}. ${heading}`}</h2>
              <p>{`-> ${pointOne}`}</p>
              <p>{`-> ${pointTwo}`}</p>
              {pointThree ? <p>{`-> ${pointThree}`}</p> : ""}
            </div>
          );
        }
      )}
      <h2>12. Contact Information</h2>
      <p>For questions or concerns, contact us at:</p>
      <p>Phone: +91 9153982121</p>
      <p>Email : Ghoomanewala.com@gmail.com</p>
      <p>Address: : Kund muhalla, near Dr gp Singh hospital road - 822101.</p>

      <p>
        Acknowledgment By: using ghomanewala.com, you acknowledge that you have
        read, understood, and agreed to these Terms and Conditions.
      </p>
    </section>
  );
};

export { TermsAndConditions };
