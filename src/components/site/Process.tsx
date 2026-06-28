const steps = [
  { n: "01", t: "Research", d: "We talk to people, read the data, and find the real problem." },
  { n: "02", t: "Design", d: "We prototype, refine, and obsess over the smallest interactions." },
  { n: "03", t: "Develop", d: "We build with modern, reliable tools and ship behind a feature flag." },
  { n: "04", t: "Launch", d: "We release in waves, measure carefully, and listen closely." },
  { n: "05", t: "Improve", d: "We update relentlessly — small wins compound into great products." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <div className="text-sm font-medium text-primary uppercase tracking-widest">Process</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            How we ship things <span className="text-gradient">we're proud of.</span>
          </h2>
        </div>

        <ol className="mt-14 grid md:grid-cols-5 gap-4 relative">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl bg-card border border-border/60 p-6 hover:shadow-card transition-shadow"
            >
              <div className="font-display text-sm font-semibold text-primary">{s.n}</div>
              <div className="mt-2 font-display text-lg font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
