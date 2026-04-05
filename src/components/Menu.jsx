import DecryptedText from "./animated/DecryptedText";
import { motion } from "motion/react";
;
export default function Menu({ open, setOpen }) {
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-2 right-4 z-50 px-4 py-1 text-white"
      >
        <span className="text-4xl">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center items-center text-white">
          {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-lg md:text-3xl font-bold text-white relative group"
              whileHover={{ scale: 1.02 }}
            >
              {/* underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full" />

              {/* decrypted text inside link */}
              <DecryptedText
                text={item}
                speed={150}
                maxIterations={100}
                animateOn="view"
                useOriginalCharsOnly
                sequential
              />

            </motion.a>

          ))}
        </div>
      )}
    </>
  );
}
