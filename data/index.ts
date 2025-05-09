export const navItems = [
  { id: 1, name: "About", link: "#about" },
  { id: 2, name: "Projects", link: "#projects" }, // Ensure this link matches the section ID
  { id: 3, name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I create innovative digital solutions by combining design, AI, and modern web development.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",

  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",

  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",


  },

  {
    id: 5,
    title: "Currently building a Next.js Website",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",

  },
  {
    id: 6,
    title: "Check out my latest projects",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",

  },
];

export const projects = [
  {
    id: 1,
    title: "LEVEL UP AI Assistant",
    des: "Note-taking, task management, collaborative whiteboarding, chatbot",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg","/c.svg"],
    link: "https://github.com/Ralein/LEVEL_UP_AI_Assistant"
  },
  {
    id: 2,
    title: "Focusflow Note-Making App",
    des: "AI-powered note organization with categorization, search,voice-to-text, and text-to-speech features",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/convex.svg"],
    link: "https://github.com/Ralein/focus-flow",
  },
  {
    id: 3,
    title: "Raleinex-Clothing Brand", 
    des: "Features: Low-Fidelity and High-Fidelity prototypes, responsive UI design",
    img: "/p3.svg",
    iconLists: ["/fig.svg", "/aid.svg", "/axd.svg", "/ps.svg"],
    link: "https://www.behance.net/raleinnova",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer - Pricol Ltd",
    desc: "I create Next.js applications that convert wireframes into code and I also worked on a ticket analysis tool using the Ollama API, which detects recurring IT issues ",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Academic Project Experience",
    desc: "Developed UX/UI case studies, problem-solving skills, and practical application of technical knowledge.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    desc: "As a UI/UX designer, I've crafted visually-driven projects and designed numerous app interfaces, blending creativity with usability to deliver engaging and intuitive digital experiences.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];