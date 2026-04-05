import ravenImg from "../assets/projects/raven.png";
import jansevaImg from "../assets/projects/janseva.png";

export const projects = [
  {
    id: "raven",
    title: "Raven",
    shortDescription: "A secure, lightning-fast private communication platform with E2E encryption.",
    detailedDescription: "Raven is a high-performance communication suite designed for privacy-conscious users. It features end-to-end encryption for all messages and media, lightning-fast delivery via Socket.io, and a minimalist design that doesn't get in your way. Built as a full-stack solution, it tackles complex synchronization issues across multiple devices while maintaining zero-knowledge security.",
    image: ravenImg,
    github: "https://github.com/ananthak803/Raven",
    deployment: "#",
    tags: ["React", "Express", "Socket.io", "WebRTC", "MongoDB"],
    color: "rgba(245, 158, 11, 0.2)",
    features: [
      "End-to-End Encryption (E2EE)",
      "Real-time Messaging (Socket.io)",
      "Peer-to-Peer Voice/Video calls (WebRTC)",
      "Multi-device synchronization",
      "Minimalist Dark Mode UI"
    ]
  },
  {
    id: "janseva",
    title: "JanSeva",
    shortDescription: "A community service portal for simplifying government interactions.",
    detailedDescription: "JanSeva (Public Service) aims to bridge the gap between citizens and local government services. In many regions, accessing basic public services remains a bureaucratic hurdle. JanSeva provides an easy-to-use digital dashboard where users can apply for documents, report local issues, and track their applications in real-time. It leverages a robust MERN stack backend to handle high traffic and critical data safely.",
    image: jansevaImg,
    github: "https://github.com/ananthak803/janSeva",
    deployment: "#",
    tags: ["React Native", "Tailwind", "API Integration", "JWT", "MongoDB"],
    color: "rgba(14, 165, 233, 0.2)",
    features: [
      "Document application management",
      "Real-time application tracking",
      "Community reporting system",
      "Secure user authentication (JWT)",
      "Admin dashboard for service providers"
    ]
  },
  // {
  //   id: "alpha",
  //   title: "Project Alpha",
  //   shortDescription: "Exploring the boundaries of decentralized web technologies and Wasm.",
  //   detailedDescription: "Project Alpha is an experimental project focused on high-speed browser-based computations using WebAssembly (Wasm) and Rust. It aims to provide decentralized data processing capabilities directly to users without relying on heavy cloud servers, exploring the future of a more distributed and privacy-focused internet.",
  //   image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
  //   github: "#",
  //   deployment: "#",
  //   tags: ["Rust", "Wasm", "Web3", "Distributed Systems"],
  //   color: "rgba(236, 72, 153, 0.2)",
  //   features: [
  //     "Wasm-based compute engine",
  //     "P2P Data synchronization",
  //     "High-performance Rust modules",
  //     "Decentralized storage exploration"
  //   ]
  // },
];
