import { useOutletContext } from "react-router-dom";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Expertise from "./Expertise";
import Projects from "./Projects";
// import { useScroll ,useTransform} from "motion/react";
// import { useRef } from "react";

const Home = () => {
  const { menuOpen } = useOutletContext()

  return (
    <main className="relative h-[400vh] bg-black overflow-hidden">
      <div
        className={`transition-opacity duration-300 ${
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <section  className="h-[90vh] relative z-10" id="#">
          <Hero />
        </section>

        <section className="h-[100vh]" id="about me">
            <AboutMe/>
        </section>
        <section className="h-screen pt-10 " id="experience">
            <Expertise/>
        </section>

        {/* <section>
          <Projects/>
        </section> */}


      </div>

      {menuOpen && (
        <div className="absolute inset-0 bg-black z-20" />
      )}
    </main>
  );
};

export default Home;
