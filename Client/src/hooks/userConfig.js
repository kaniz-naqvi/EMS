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
    secondaryColor: "#CE8380",
    background: "#FAFAFA",
    textColor: "#222222",
  },

  education: [
    {
      degree: "BS Computer Science",
      institution: "Virtual University of Pakistan",
      startYear: "2022",
      endYear: "2026",
      details:
        "Focused on software engineering, algorithms, and modern web technologies.",
    },
    {
      degree: "Intermediate in Pre-Engineering",
      institution: "Govt. Science College",
      startYear: "2020",
      endYear: "2022",
    },
  ],

  experience: [
    {
      role: "Frontend Developer",
      company: "TechNova Solutions",
      startDate: "Mar 2024",
      endDate: "Present",
      details:
        "Working on React and Redux-based applications with Tailwind for styling. " +
        "Collaborated with backend teams to integrate REST APIs and improve performance.",
    },
    {
      role: "Intern Web Developer",
      company: "CodeCrafters",
      startDate: "Jan 2023",
      endDate: "Feb 2024",
      details:
        "Assisted in building a company portfolio website using React and Express. " +
        "Optimized UI components for better performance and accessibility.",
    },
  ],

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

  skills: {
    frontend: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
    ],
    backend: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    tools: ["Git", "VS Code", "Postman", "Figma"],
  },

  socials: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    portfolio: "https://johndoe.dev",
  },
};

export default userConfig;
