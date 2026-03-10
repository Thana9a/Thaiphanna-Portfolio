import React from "react";
import Nav from "../Components/layout/Navbar";
import Hero from "../Components/sections/Hero";
import About from "../Components/sections/About";

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
      {/* skill */}
      {/* project */}
      {/* footer */}
    </div>
  );
}

export default Home;
