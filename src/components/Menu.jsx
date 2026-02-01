import DecryptedText from "./animated/DecryptedText";

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
          {["Home", "About me", "Experience","Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
  text-4xl md:text-4xl font-bold text-white my-3
  transition-all duration-300 ease-out
  hover:scale-[1.1]
  
"
            >
              <DecryptedText
                text={item}
                speed={150}
                maxIterations={100}
                animateOn="view"
                useOriginalCharsOnly
                sequential
              />
            </a>
          ))}
        </div>
      )}
    </>
  );
}
