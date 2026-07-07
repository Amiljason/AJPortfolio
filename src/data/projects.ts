export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Amiljason",
    demo: "#",
    status: "Live",
  },
  {
    title: "Task Manager",
    description:
      "A simple full-stack app idea for tracking personal tasks with clean filtering and status views.",
    tech: ["MERN", "REST API", "MongoDB"],
    github: "#",
    status: "Planned",
  },
  {
    title: "Learning Dashboard",
    description:
      "A dashboard concept for monitoring study progress, streaks, and problem-solving consistency.",
    tech: ["React", "Charts", "Tailwind CSS"],
    github: "#",
    status: "Planned",
  },
];