import { portfolio } from "../data/portfolio";
import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-900 px-6">
      <div className="text-center">
        <p className="mb-4 text-xl text-slate-300">
          {portfolio.greeting}
        </p>

        <h1 className="mb-4 text-6xl font-bold text-white md:text-7xl">
          I'm {portfolio.name}
        </h1>

        <h2 className="mb-10 text-2xl text-slate-400 md:text-3xl">
          {portfolio.role}
        </h2>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Contact Me
          </a>
        </div>

        <a
          href="#about"
          className="mt-16 flex justify-center text-slate-400"
        >
          <ArrowDown size={30} />
        </a>
      </div>
    </section>
  );
}

export default Hero;