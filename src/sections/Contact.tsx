import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { contact } from "../data/contact";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-28"
    >
      <Container>
        <SectionHeading
          title="Contact"
          subtitle="Let's connect."
        />

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950 p-8">
          <p className="text-slate-300">
            <strong>Email:</strong> {contact.email}
          </p>

          <p className="text-slate-300">
            <strong>LinkedIn:</strong> {contact.linkedin}
          </p>

          <p className="text-slate-300">
            <strong>GitHub:</strong> {contact.github}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Contact;