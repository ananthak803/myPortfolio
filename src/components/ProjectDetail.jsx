import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import { SiGithub } from "react-icons/si";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white bg-[#010101]">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">404</h1>
        <p className="text-xl opacity-50 mb-8">Project not found</p>
        <Link to="/" className="hero-btn-secondary">Go Back Home</Link>
      </div>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#010101] text-white pt-10 pb-32 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* go back */}
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group">
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        {/* head */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/40">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
              {project.title.toUpperCase()}
            </h1>
            <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed mb-10">
              {project.shortDescription}
            </p>

            <div className="flex gap-4">
              {
                project.deployment !== "#" && (
                  <a
                    href={project.deployment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn-primary"
                  >
                    Launch App
                  </a>
                )
              }

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-secondary flex items-center gap-2"
              >
                <SiGithub /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>

        {/* info */}
        <div className="mt-20 grid md:grid-cols-3 gap-20">
          <motion.div
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-yellow-400 uppercase tracking-widest">Overview</h2>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light whitespace-pre-line">
              {project.detailedDescription}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-yellow-400 uppercase tracking-widest">Key Features</h2>
            <ul className="space-y-4">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                  <span className="text-lg font-light leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* tech stack */}
        <motion.div
          className="mt-10 pt-10 border-t border-white/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-10 text-center text-white/20 uppercase tracking-[0.5em]">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {project.tags.map(tag => (
              <div key={tag} className="px-5 py-2.5 md:px-6 md:py-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-yellow-400/30 transition-all duration-300">
                <span className="text-base md:text-lg font-medium text-white/40">{tag}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
