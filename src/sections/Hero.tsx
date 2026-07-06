import "../styles/hero.css";
import { ArrowDown } from "lucide-react";
import { portfolio } from "../data/portfolio";
import profile from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero-gradient flex min-h-screen items-center bg-slate-900 px-6 pt-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-20 md:flex-row">
        <div className="max-w-2xl">
          <p className="mb-4 text-xl text-slate-300">
            {portfolio.greeting}
          </p>

          <h1 className="mb-4 text-6xl font-bold text-white md:text-7xl">
            I'm {portfolio.name}
          </h1>

          <h2 className="text-2xl text-slate-400">
            {portfolio.role}
          </h2>

          <p className="mt-6 mb-10 max-w-xl text-lg leading-8 text-slate-400">
            {portfolio.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
          View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800"
            >
          Contact Me
            </a>
          </div>

          <a
            href="#about"
            className="mt-16 inline-flex text-slate-400"
          >
            <ArrowDown size={30} />
          </a>
        </div>

        <div>
          <img
            src={profile}
            alt="Amil Jason"
            className="h-80 w-80 rounded-full object-cover border-4 border-slate-700 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;