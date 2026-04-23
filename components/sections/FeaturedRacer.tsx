import Image from "next/image";
import { racerFeatures } from "@/lib/content";

const RACER_IMAGE =
  "https://res.cloudinary.com/dqlpq0s6t/image/upload/v1776905035/astra%20ascension/nexus_x_m9ztv8.png";

export default function FeaturedRacer() {
  return (
    <section id="racer" className="py-24 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image with skew decoration */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -inset-3 border border-primary/20 -skew-x-3" />
          <div className="relative aspect-[4/3] -skew-x-2 overflow-hidden">
            <Image
              src={RACER_IMAGE}
              alt="Nexus X — Featured Astra Ascension racing ship"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <h2 className="font-display text-4xl md:text-5xl font-bold italic tracking-tight text-white mb-6 leading-tight">
            <span className="text-secondary">Speed</span>
              {" "}Isn't Enough
          </h2>
          <p className="text-on-surface-muted text-lg leading-relaxed mb-10">
            In Astra Ascension, precision and survival go hand in hand. Master
            anti-gravity control across vertical, multi-plane circuits while the field
            thins and every mistake costs you.
          </p>
          <ul className="space-y-5">
            {racerFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-on-surface">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
