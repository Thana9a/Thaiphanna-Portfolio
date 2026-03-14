import React from "react";
import Nav from "../Components/layout/Navbar";
import Hero from "../Components/sections/Hero";
import About from "../Components/sections/About";
import Skills from "../Components/sections/Skills";
import Project from "../Components/sections/Projects";

function Home() {
  return (
    <div>
      <Nav />
      {/* background */}

      {/* home */}
      <div>
        <Hero id="home" />
      </div>
      {/* hero */}
      {/* main /}
      {/* about */}
      <About id="about" />
        {/* project */}
        <Project id="projects" />
      {/* skill */}
        <Skills id="skills" />
      {/* footer */}
    </div>
  );
}

export default Home;
