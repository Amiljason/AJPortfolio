import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-28"
    >
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="Some of my recent work."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href={project.github}
                  className="rounded-lg border border-slate-700 px-4 py-2 text-white transition hover:border-white"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="rounded-lg bg-white px-4 py-2 text-slate-900 transition hover:opacity-90"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;