import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { about } from "../data/about";
import { theme } from "../data/theme";

function About() {
  return (
    <section
      id="about"
      className={`${theme.colors.sectionDark} py-28`}
    >
      <Container>
        <SectionHeading
          title={about.title}
          subtitle={about.subtitle}
        />

        <p
          className={`mx-auto max-w-3xl text-center text-lg leading-8 ${theme.colors.textMuted}`}
        >
          {about.description}
        </p>
      </Container>
    </section>
  );
}

export default About;