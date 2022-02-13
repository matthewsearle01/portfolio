import React from "react";
import Navbar from "../../Organisms/Navbar";
import About from "../../Organisms/About";
import Skills from "../../Organisms/Skills";
import "../../../styles.css";


const AboutPage = () => {
  return (
    <div class="min-h-full px-5">
      <Navbar />
      <About />
      <Skills />
    </div>
  );
};

export default AboutPage;
