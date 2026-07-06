import SectionHeading from "../components/SectionHeading";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
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
      </div>
    </section>
  );
}

export default About;