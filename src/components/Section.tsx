import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  id: string;
  className: string;
  children: ReactNode;
};

function Section({
  id,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={className}>
      <Container>{children}</Container>
    </section>
  );
}

export default Section;