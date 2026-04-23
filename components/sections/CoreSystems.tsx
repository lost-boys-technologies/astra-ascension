import { features } from "@/lib/content";

export default function CoreSystems() {
  return (
    <section id="features" className="py-24 scroll-mt-20">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            Core Systems
          </h2>
          <div className="h-px w-24 bg-secondary mx-auto mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-glow bg-surface/40 p-8 relative group hover:bg-primary/5 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-12 h-0.5 bg-secondary" />
              <h3 className="font-display text-base font-bold uppercase tracking-wide text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-on-surface-muted text-sm leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
