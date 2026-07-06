import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { achievements } from "../data/achievements";

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-slate-950 py-28"
    >
      <Container>
        <SectionHeading
          title="Achievements"
          subtitle="Highlights of my journey."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {achievement.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Achievements;