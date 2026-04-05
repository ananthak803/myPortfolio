import React from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPython,
  SiGo,
  SiCplusplus,
  SiExpress,
  SiDocker,
  SiGit
} from "react-icons/si";
import { motion } from "motion/react";
import LogoLoop from "./animated/LogoLoop"
const AboutMe = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiGo />, title: "Go", href: "https://go.dev" },
    { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  ];

  return (
    <section className="relative h-full text-white pt-16 md:pt-24 pb-8 bg-transparent overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 md:mb-10 tracking-tighter">
            About <span className="text-yellow-400">Me</span>
          </h2>

          <div className="space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl md:text-4xl font-light text-white leading-tight">
                I am a <span className="text-white font-bold tracking-tight">Software Engineer</span> in the making, focused on creating
                <span className="text-yellow-400 font-medium italic"> elegant </span>
                digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pl-6 md:pl-8 border-l-2 border-yellow-400/30"
            >
              <p className="text-base md:text-xl text-white/50 leading-relaxed font-light">
                From crafting <span className="text-white font-medium border-b border-yellow-400/50">modern UIs</span> with React & Tailwind to plumbing <span className="text-white font-medium border-b border-yellow-400/50">robust backends</span> with Node.js, I constantly push beyond my comfort zone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-sm md:text-lg text-white/40 italic">
                Currently bridging the gap between design and logic at Graphic Era Hill University.
              </p>
            </motion.div>
          </div>

        </div>

        <div className="relative">
          <div
            className="h-32 md:h-48 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-2xl flex items-center overflow-hidden project-card"
          >
            <LogoLoop
              logos={techLogos}
              speed={40}
              direction="left"
              logoHeight={window.innerWidth < 768 ? 30 : 40}
              gap={50}
              scaleOnHover
              fadeOut={true}
            />
          </div>
          <div className="absolute -inset-px rounded-2xl md:rounded-3xl border border-yellow-400/10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};


export default AboutMe
