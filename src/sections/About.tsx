import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-28"
    >
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better."
        />

        <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-slate-400">
          I'm a Computer Science undergraduate passionate about software
          engineering, full-stack web development, and solving complex
          algorithmic problems. I enjoy building modern, scalable applications
          while continuously exploring new technologies and improving my
          problem-solving skills.
        </p>
      </Container>
    </section>
  );
}

export default About;