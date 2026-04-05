import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { projects } from "../data/projects";

const Projects = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project-section");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollRef.current.offsetWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden" id="projects">
      <div className="h-[20vh] flex items-center px-10 md:px-20 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 blur-[100px] rounded-full pointer-events-none" />
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white/20">
          FEATURED <span className="text-yellow-400/80">PROJECTS</span>
        </h2>
      </div>

      {/* horizontal scroll section */}
      <div ref={scrollRef} className="flex" style={{ width: `${projects.length * 100}vw` }}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-section w-screen h-[80vh] flex items-center justify-center p-6 md:p-20"
          >
            <div className="project-card w-full max-w-6xl h-full flex flex-col md:flex-row overflow-hidden relative">

              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
              />

              {/* image */}
              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay" />
              </div>

              {/* content*/}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-6 relative z-10">
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                  {project.title}
                </h3>

                <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-md">
                  {project.shortDescription}
                </p>

                <Link
                  target="_blank"
                  to={`/project/${project.id}`}
                  className="mt-4 inline-flex items-center gap-3 text-yellow-400 font-semibold group w-fit"
                  data-cursor-hover
                >
                  <span className="relative">
                    View Project
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* proeject number*/}
              <span className="absolute top-4 right-8 text-[120px] font-black text-white/5 pointer-events-none italic leading-none">
                0{idx + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;