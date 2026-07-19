import projects from './projects.json';

// Process projects to add BASE_URL to image paths
const processedProjects = projects.map(proj => ({
  ...proj,
  img: proj.img ? `${import.meta.env.BASE_URL}${proj.img}` : proj.img
}));

export const portfolioData = {
  hero: {
    tagline: "AVAILABLE FOR WORK",
    name: "Munyaradzi Chakwenya.",
    title: "I build high-fidelity web & mobile applications.",
    description: "Software Developer specializing in crafting modern, high-fidelity interfaces and custom digital experiences. Focused on building robust, scalable applications with React, Vite, and modern cloud architectures.",
    email: "munyaradzichakwenya60@gmail.com",
    cvLink: `${import.meta.env.BASE_URL}assets/Munyaradzi_Chakwenya_CV.pdf`,
  },
  about: {
    eyebrow: "01 — ABOUT ME",
    heading: "Turning ideas into digital products.",
    bio1: "Hello! I'm Munyaradzi, a developer based in Bulawayo, Zimbabwe, specializing in software development at Uncommon.org. My passion lies at the intersection of slick, responsive user interfaces and powerful backend architectures.",
    bio2: "With a technical background that includes automotive precision machining, I bring a hyper-focused attention to detail—whether I'm structuralizing layouts with styled-components, managing dynamic application states, or architecting secure database schemas.",
    skills: [
      "React / Vite",
      "JavaScript / TypeScript",
      "Styled Components",
      "Tailwind CSS",
      "Node.js",
      "Python",
      "chroma DB",
      "Git / GitHub",
      "Figma",
    ],
    certifications: [
      { name: "Design Thinking", by: "Uxcel" },
      { name: "Fundamentals of UI", by: "Uxcel" },
      { name: "Enhancing ux workflow with AI", by: "Uxcel" },
    ],
  },
  projects: processedProjects,
  contact: {
    eyebrow: "03 — LET'S CONNECT",
    heading: "Open to new opportunities.",
    body: "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    socials: [
      { name: "GitHub", link: "https://github.com/munyaradzichakwenya60-coder" },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/munyaradzi-chakwenya" },
      { name: "Email", link: "mailto:munyaradzichakwenya60@gmail.com" },
    ],
  },
};
