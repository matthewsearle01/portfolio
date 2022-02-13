import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../components/Pages/HomePage";
import AboutPage from "../components/Pages/AboutPage";
import ContactPage from "../components/Pages/ContactPage";
import React from "react";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cv" />
      </Routes>
    </Router>
  );
};

export default Routing;
