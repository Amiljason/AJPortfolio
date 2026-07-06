import SectionHeading from "../components/SectionHeading";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 px-6 py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Experience"
          subtitle="My journey so far."
        />

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {experience.title}
                  </h3>

                  <p className="text-slate-400">
                    {experience.organization}
                  </p>
                </div>

                <span className="text-slate-500">
                  {experience.duration}
                </span>
              </div>

              <p className="mt-6 text-slate-400">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;