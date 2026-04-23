import Image from "next/image";

const HERO_IMAGE =
  "https://res.cloudinary.com/dqlpq0s6t/image/upload/v1776905112/astra%20ascension/astra_circuit_pqlkc5.png";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Astra Ascension racing circuit"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/50" />
        <div
          className="scanline absolute inset-0 opacity-20 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Badge */}
        <div className="inline-flex items-center border-l-4 border-magenta pl-3 mb-6">
          <span className="font-display text-sm font-bold uppercase tracking-[0.15em] text-glow-pulse">
            In Development
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-6xl md:text-8xl font-black italic tracking-tighter text-white mb-4 drop-shadow-[0_0_20px_rgba(0,229,255,0.35)]">
          ASTRA{" "}
          <span className="text-primary">ASCENSION</span>
        </h1>

        {/* Subline */}
        <p className="font-display text-xl md:text-2xl font-light tracking-[0.2em] text-white/65 mb-12 uppercase">
          <span className="font-bold text-white">Ascend Beyond Speed</span>
        </p>

        {/* CTA */}
        <a
          href="#cta"
          className="inline-block font-display text-xs font-black uppercase tracking-widest text-background bg-primary px-14 py-4 parallelogram hover:shadow-[0_0_35px_rgba(0,229,255,0.55)] hover:scale-105 transition-all duration-200"
        >
          More Info
        </a>
      </div>
    </section>
  );
}
