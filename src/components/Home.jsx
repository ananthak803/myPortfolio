import React from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Expertise from "./Expertise";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const { menuOpen } = useOutletContext()

  return (
    <main className="relative bg-[#010101] overflow-x-hidden min-h-screen">

      {/* Cinematic Grain Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] noise-overlay" />
      <div
        className={`transition-opacity duration-300 ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        <section id="hero" className="relative z-10">
          <Hero />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="expertise">
          <Expertise />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>


      {menuOpen && (
        <div className="absolute inset-0 bg-black z-20" />
      )}
    </main>



  )
}


export default Home;
