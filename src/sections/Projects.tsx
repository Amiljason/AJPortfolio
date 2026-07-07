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
          subtitle="Selected work and ideas I can keep expanding over time."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-slate-500/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                {project.status && (
                  <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <div className="flex flex-wrap gap-3">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;