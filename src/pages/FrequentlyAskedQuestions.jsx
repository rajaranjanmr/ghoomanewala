import React from "react";
import { faq } from "../data/faq";

const FrequentlyAskedQuestions = () => {
  return (
    <section className="mx_2rem">
      <h1 className="text_align_center">Frequently Asked Questions (FAQ)</h1>
      {faq.map(({ question, answer }) => {
        return (
          <div key={question}>
            <h3>{question}</h3>
            <p>{answer}</p>
          </div>
        );
      })}
      <h3>13. How do I contact customer support?</h3>
      <p>You can reach Ghomanewala's customer support via:</p>
      <p>Email: support@ghomanewala.com</p>
      <p>Phone: +1-800-123-4567</p>
      <p>Live Chat: Available on our website during business hours.</p>

      <p>
        We are here to assist you 24/7 with any queries or concerns you may
        have.
      </p>
    </section>
  );
};

export { FrequentlyAskedQuestions };
