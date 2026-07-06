import { portfolio } from "../data/portfolio";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <p className="mb-4 text-xl">{portfolio.greeting}</p>

        <h1 className="text-6xl font-bold">
          I'm {portfolio.name}
        </h1>

        <h2 className="mt-4 text-2xl text-slate-400">
          {portfolio.role}
        </h2>
      </div>
    </section>
  );
}

export default Hero;