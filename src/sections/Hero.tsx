import "../styles/hero.css";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { hero } from "../data/hero";
import profile from "../assets/images/profile.jpg";
import SocialLinks from "../components/SocialLinks";
import Background from "../components/three/Background";

function Hero() {
  return (
    <section className="hero-gradient relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-32 md:pt-28">
      <Background />

      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-4xl flex-col items-center text-center">
        <div className="max-w-3xl">
          <p className="mb-5 text-lg font-medium tracking-wide text-blue-400">
            {hero.greeting}
          </p>

          <h1 className="mb-6 text-6xl font-semibold leading-tight tracking-tight text-slate-100 md:text-8xl">
            I&apos;m <span className="bg-gradient-to-r from-slate-950 via-purple-600 to-violet-400 bg-clip-text text-transparent">{hero.name}</span>
          </h1>

          <TypeAnimation
            sequence={[
              hero.roles[0],
              2000,
              hero.roles[1],
              2000,
              hero.roles[2],
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="block min-h-[3rem] text-2xl font-medium text-slate-300 md:text-3xl"
          />

          <p className="mx-auto mt-8 mb-12 max-w-2xl text-xl leading-9 text-slate-400">
            {hero.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200"
            >
              Contact Me
            </a>
          </div>

          <SocialLinks />

          <a
            href="#about"
            className="mt-16 inline-flex justify-center text-slate-500 transition hover:text-white"
          >
            <ArrowDown size={30} className="justify-center" />
          </a>
        </div>

        <div className="mt-14 flex justify-center">
          <img
            src={profile}
            alt="Amil Jason"
            className="h-[300px] w-[300px] rounded-full border border-white/10 object-cover shadow-[0_0_80px_rgba(15,23,42,0.5)] transition-transform duration-500 hover:scale-105 md:h-[360px] md:w-[360px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;