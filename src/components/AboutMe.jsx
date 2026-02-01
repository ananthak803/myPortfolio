import React from 'react'
import LogoLoop from "./animated/LogoLoop"
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
  SiReactos,
  SiExpress,
  SiDocker,
  SiGit
} from "react-icons/si";

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

  { node: <SiReactos />, title: "React Native", href: "https://reactnative.dev" },

  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
];
 return (
  <section className="relative h-full text-white py-20">
    <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
      <div className="w-72 h-72 bg-cyan-500/40 rounded-full absolute top-10 left-10" />
      <div className="w-72 h-72 bg-purple-500/40 rounded-full absolute bottom-10 right-10" />
    </div>

    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-red-400">Me</span>
        </h2>

        <p className="text-white/80 leading-relaxed text-lg mb-4">
          I’m a <span className="text-white font-medium">software engineer in the making</span> who loves 
          building fast, clean, and scalable applications. I enjoy turning complex
          problems into simple, elegant solutions.
          Currently, I'm a student at Graphic Era Hill University Dehradun, Pursuing my B.Tech in CSE.
        </p>

        <p className="text-white/70 leading-relaxed text-lg mb-4">
          From crafting modern UIs with React and 
          Tailwind to building robust backends using 
           Node.js and databases, I’m always exploring
          new technologies and pushing my limits.
        </p>
        <p className="text-white/70 leading-relaxed text-lg">
        Outside of work, I’m usually playing video games, listening to music,
  and occasionally remembering to touch grass.
        </p>
      </div>

      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
        className="rounded-2xl border flex items-center border-white/10 
        bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl"
      >
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={50}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology stack"
        />
      </div>
    </div>
  </section>
);
}

export default AboutMe
