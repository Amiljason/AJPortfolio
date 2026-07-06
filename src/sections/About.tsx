import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { about } from "../data/about";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-28"
    >
      <Container>
        <SectionHeading
          title={about.title}
          subtitle={about.subtitle}
        />

        <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-slate-400">
          {about.description}
        </p>
      </Container>
    </section>
  );
}

export default About;