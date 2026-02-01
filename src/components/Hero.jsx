import React from "react";

const Hero = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Anantha Krishnan
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white/80">
          Software Engineer in the Making
        </p>

        {/* <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed">
          I’m a B.Tech CSE student passionate about building scalable web
          applications and solving real-world problems using JavaScript,
          Node.js, and modern frontend technologies. I enjoy turning ideas
          into clean, functional digital experiences.
        </p> */}

        <div className="mt-10 flex gap-6 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 text-sm font-medium text-black bg-white rounded-full
                       hover:bg-gray-200 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium text-white border border-white/40
                       rounded-full hover:border-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
