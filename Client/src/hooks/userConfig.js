// will delete this file after backend completion
const userConfig = {
  username: "johndoe",
  fullName: "John Doe",
  title: "Full Stack Developer | Open Source Enthusiast",
  about: `I am a passionate full stack developer with 3+ years of experience
building scalable web applications. I enjoy working with modern frameworks
and experimenting with new technologies. My goal is to create solutions
that improve user experiences and solve real-world problems.`,

  // Theme preferences
  theme: {
    primaryColor: "#0E6BA8",
    background: "#FAFAFA",
    textColor: "#222222",
  },

  // ------------------- SECTIONS (unified schema) -------------------
  sections: {
    education: [
      {
        title: "BSCS",
        duration: "2022 – 2026",
        description:
          "Focused on software engineering, algorithms, and modern web technologies.",
        institution: "Virtual University of Pakistan",
      },
      {
        title: "Intermediate in Pre-Engineering",
        duration: "2020 – 2022",
        description: "",
        institution: "Govt. Science College",
      },
    ],

    experience: [
      {
        title: "Frontend Developer",
        duration: "Mar 2024 – Present",
        description:
          "Working on React and Redux-based applications with Tailwind for styling. " +
          "Collaborated with backend teams to integrate REST APIs and improve performance.",
        institution: "TechNova Solutions",
      },
      {
        title: "Intern Web Developer",
        duration: "Jan 2023 – Feb 2024",
        description:
          "Assisted in building a company portfolio website using React and Express. " +
          "Optimized UI components for better performance and accessibility.",
        institution: "CodeCrafters",
      },
    ],

    certifications: [
      {
        title: "React Developer Certification",
        duration: "2023",
        description: "",
        institution: "Meta (Coursera)",
      },
      {
        title: "Backend Development with Node.js",
        duration: "2022",
        description: "",
        institution: "Udemy",
      },
    ],

    awards: [],
    volunteering: [],
    publications: [],
  },

  // ------------------- SKILLS (separate table) -------------------
  skills: [
    {
      category: "frontend",
      items: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "Bootstrap",
        "JavaScript",
      ],
    },
    {
      category: "backend",
      items: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    },
    { category: "tools", items: ["Git", "VS Code", "Postman", "Figma"] },
  ],

  // ------------------- PROJECTS -------------------
  projects: [
    {
      name: "Amazon Clone",
      description:
        "A responsive e-commerce clone with authentication, product filtering, and cart system.",
      tech: ["React", "Redux", "Tailwind", "LocalStorage"],
      link: "https://github.com/johndoe/amazon-clone",
    },
    {
      name: "Blog Website",
      description:
        "Full stack blog application with CRUD features using Express and file-based storage.",
      tech: ["Node.js", "Express", "Bootstrap"],
      link: "https://github.com/johndoe/blog-app",
    },
    {
      name: "MovieLand",
      description:
        "Movie search app powered by the OMDB API with clean UI and search suggestions.",
      tech: ["React", "CSS", "API"],
      link: "https://github.com/johndoe/movie-land",
    },
  ],

  // ------------------- SOCIAL LINKS -------------------
  socials: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    portfolio: "https://johndoe.dev",
  },
};

export default userConfig;
