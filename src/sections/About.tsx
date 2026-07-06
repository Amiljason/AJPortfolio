import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { about } from "../data/about";
import { theme } from "../data/theme";

function About() {
  return (
    <Section
      id="about"
      className={`${theme.colors.sectionDark} py-28`}
    >
      <SectionHeading
        title={about.title}
        subtitle={about.subtitle}
      />

      <p
        className={`mx-auto max-w-3xl text-center text-lg leading-8 ${theme.colors.textMuted}`}
      >
        {about.description}
      </p>
    </Section>
  );
}

export default About;