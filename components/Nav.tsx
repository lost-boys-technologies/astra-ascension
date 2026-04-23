const navLinks = [
  { label: "Racer", href: "#racer" },
  { label: "Systems", href: "#features" },
  { label: "Join", href: "#cta" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#000e26]/80 backdrop-blur-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <span className="font-display text-xl font-black italic tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]">
            ASTRA ASCENSION
          </span>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-xs font-bold uppercase tracking-widest text-on-surface-muted hover:text-on-surface transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <a
          href="#cta"
          className="parallelogram font-display text-xs font-black uppercase tracking-widest text-background bg-primary px-8 py-2.5 hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-shadow duration-200"
        >
        Coming Soon
        </a>
      </div>
    </header>
  );
}
