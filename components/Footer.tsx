export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 bg-black/80 border-t border-primary/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <span className="font-display text-sm font-bold tracking-tighter text-on-surface-muted">
          ASTRA ASCENSION
        </span>
        <span className="font-display text-xs uppercase tracking-wider text-on-surface-muted/40">
          © Copyright {new Date().getFullYear()}, Lost Boys Technologies
        </span>
      </div>
    </footer>
  );
}
