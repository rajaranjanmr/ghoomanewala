import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { ContactUs } from "./components/ContactUs";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { Navigation } from "./components/navigation/Navigation";
import { Footer } from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <main className="content">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
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
