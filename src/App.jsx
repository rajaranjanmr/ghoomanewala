import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { ContactUs } from "./components/ContactUs";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { Footer, Navigation } from "./components";
import { Home, UpcomingJourneys } from "./pages";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <main className="content">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upcoming-journeys" element={<UpcomingJourneys />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
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
