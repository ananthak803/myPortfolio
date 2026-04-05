import React from "react";
import { motion } from "motion/react";
import ScrollReveal from "./animated/ScrollReveal";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <SiGithub />,
      url: "https://github.com/ananthak803",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin />,
      url: "www.linkedin.com/in/ananthak803",
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Email",
      icon: <SiGmail />,
      url: "mailto:ananthak803@gmail.com",
      color: "hover:text-[#EA4335]",
    },
  ];

  return (
    <section
      id="contact"
      className="h-screen px-6 flex flex-col items-center bg-[#010101] relative overflow-hidden"
    >
      <div className="max-w-4xl w-full flex flex-col h-full py-8 md:py-12 relative z-10">
        <div className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-10">
          <ScrollReveal
            baseOpacity={0.1}
            textClassName="text-3xl md:text-6xl font-black tracking-tighter text-yellow-400"
          >
            LET'S WORK TOGETHER.
          </ScrollReveal>

          <p className="text-sm md:text-lg text-white/40 font-light max-w-lg mx-auto">
            Currently looking for new opportunities and collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-1 group transition-all duration-300 ${link.color}`}
                whileHover={{ y: -2 }}
              >
                <div className="text-xl md:text-2xl text-white/20 transition-colors group-hover:text-inherit">
                  {link.icon}
                </div>
                <span className="text-[9px] font-medium tracking-widest uppercase text-white/20 group-hover:text-white">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:your.email@example.com"
            className="text-lg md:text-3xl font-bold text-white relative group"
            whileHover={{ scale: 1.02 }}
          >
            <span>ananthak803@gmail.com</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full" />
          </motion.a>
        </div>

        {/* footer */}
        <div className="mt-8 pt-6 border-t border-white/5 text-white/20 text-[9px] md:text-xs flex flex-col md:flex-row justify-between items-center gap-4 uppercase tracking-widest">
          <p>© 2026 Anantha Krishnan</p>
          <p>Graphic Era Hill University • Dehradun</p>
        </div>
      </div>
    </section>

  );
};

export default Contact;
