import React from "react";
import Nav from "../Components/layout/Navbar";
import Hero from "../Components/sections/Hero";
import About from "../Components/sections/About";
import Skills from "../Components/sections/Skills";
import Project from "../Components/sections/Projects";
import Contact from "../Components/sections/Contact";
import ScrollProgress from "../Components/ui/ScrollProgress";
import SectionDivider from "../Components/ui/SectionDivider";

function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Scroll progress bar — always on top */}
      <ScrollProgress />

      <Nav />

      {/* Sections */}
      <Hero id="home" />

      <SectionDivider />
      <About id="about" />

      <SectionDivider />
      <Project id="projects" />

      <SectionDivider />
      <Skills id="skills" />

      <SectionDivider />
      <Contact id="contact" />
    </div>
  );
}

export default Home;

