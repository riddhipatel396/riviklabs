const quotes = [
  { q: "Genuinely the best focus timer I've ever used. It just disappears.", a: "Priya S.", r: "Product Designer" },
  { q: "Their AI career tool helped me land interviews at three companies in a week.", a: "Marcus T.", r: "Software Engineer" },
  { q: "Beautiful, fast, no nonsense. Exactly how software should feel.", a: "Lena K.", r: "Founder" },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <div className="text-sm font-medium text-primary uppercase tracking-widest">Loved by users</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Kind words from <span className="text-gradient">around the world.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {quotes.map((q) => (
            <figure key={q.a} className="rounded-2xl bg-card border border-border/60 p-6 shadow-card">
              <blockquote className="text-lg leading-relaxed text-foreground">"{q.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <div className="text-sm font-semibold">{q.a}</div>
                  <div className="text-xs text-muted-foreground">{q.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
