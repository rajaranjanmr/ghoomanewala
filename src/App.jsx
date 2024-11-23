import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navigation } from "./components";
import {
  AboutUs,
  ContactUs,
  FrequentlyAskedQuestions,
  Home,
  PrivacyPolicy,
  Services,
  Support,
  TermsAndConditions,
  UpcomingJourneys,
} from "./pages";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <main className="">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/upcoming-journeys/:journeysId"
              element={<UpcomingJourneys />}
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/frequently-asked-questions"
              element={<FrequentlyAskedQuestions />}
            />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default App;
