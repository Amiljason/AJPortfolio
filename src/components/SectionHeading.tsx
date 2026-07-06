import FadeIn from "./FadeIn";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <FadeIn>
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-slate-400">
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

export default SectionHeading;