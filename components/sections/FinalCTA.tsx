import Image from "next/image";

const CTA_IMAGE =
  "https://res.cloudinary.com/dqlpq0s6t/image/upload/v1776911371/astra%20ascension/astra_circuit_night_x4crha.png";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-40 scroll-mt-20">
      {/* Background — reuses hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={CTA_IMAGE}
          alt=""
          fill
          className="object-cover opacity-55"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h2 className="font-display text-5xl md:text-7xl font-black italic tracking-tighter text-secondary mb-6">
          The Race{" "}
          <span className="text-white">Begins Soon</span>
        </h2>
        <p className="text-on-surface-muted text-lg mb-12 max-w-md mx-auto leading-relaxed">
          Astra Ascension is in active development. Follow along as we
          build something worth racing toward.
        </p>
        <a
          href="https://x.com/AstraAscension"
          className="inline-block font-display text-xs font-black uppercase tracking-widest text-background bg-primary px-14 py-5 parallelogram hover:shadow-[0_0_50px_rgba(0,229,255,0.55)] hover:scale-105 transition-all duration-300"
        >
          Follow Development
        </a>
      </div>
    </section>
  );
}
