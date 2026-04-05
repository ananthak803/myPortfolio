import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([title1Ref.current, title2Ref.current], {
        y: 100,
        opacity: 0,
        rotateX: -45,
        duration: 1.2,
        delay: 0.5,
        ease: "power4.out",
        stagger: 0.1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center px-6 md:px-10 lg:px-20 relative overflow-hidden bg-[#010101]"
    >
      {/* software engineer head */}
      <div className="relative z-10 w-full max-w-[1400px] flex flex-col items-center justify-center text-center">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-yellow-400 font-mono text-[10px] md:text-sm tracking-[0.8em] uppercase mb-6"
        >
          Software Engineer
        </motion.span>

        {/* name */}
        <div className="flex flex-col items-center w-full">
          <div className="overflow-hidden">
            <h1
              ref={title1Ref}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[13rem] font-black tracking-tighter leading-[0.85] text-white"
            >
              ANANTHA
            </h1>
          </div>

          <div className="overflow-hidden flex flex-col items-center mt-2 md:mt-[-1rem]">
            <h1
              ref={title2Ref}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[13rem] font-black tracking-tighter leading-[0.85] text-transparent"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.2)"
              }}
            >
              KRISHNAN
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

