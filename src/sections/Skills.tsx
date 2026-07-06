import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-28"
    >
      <Container>
        <SectionHeading
          title="Skills"
          subtitle="Technologies I work with."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 text-white transition hover:border-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;