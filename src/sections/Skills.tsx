import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
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
      </div>
    </section>
  );
}

export default Skills;