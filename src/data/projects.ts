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
  {
    title: "Search Rescue Drone",
    description:
      "An innovative drone-based search and rescue system designed to locate and assist people in need.",
    tech: ["Drone Technology", "GPS", "Computer Vision"],
    github: "https://github.com/Amiljason/Search-RescueDrone",
    status: "Live",
  },
  {
    title: "Client1",
    description:
      "A client-focused project delivering tailored solutions and services.",
    tech: ["Full Stack", "Web Development"],
    github: "https://github.com/Amiljason/client1",
    status: "Live",
  },
];