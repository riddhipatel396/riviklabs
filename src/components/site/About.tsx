export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-sm font-medium text-primary uppercase tracking-widest">About</div>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
          An independent studio crafting{" "}
          <span className="text-gradient">software that feels human.</span>
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-8 text-lg text-muted-foreground leading-relaxed">
          <p>
            Rivik Labs is an independent software studio focused on creating thoughtfully designed
            applications powered by modern technologies and artificial intelligence.
          </p>
          <p>
            We believe software should be simple, beautiful, and genuinely useful — built with the
            patience of a craft and the speed of a startup.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "12+", v: "Apps shipped" },
            { k: "190", v: "Countries reached" },
            { k: "4.8★", v: "Avg. rating" },
            { k: "100%", v: "Independently owned" },
          ].map((s) => (
            <div key={s.v} className="glass shadow-card rounded-2xl p-5">
              <div className="font-display text-3xl font-bold text-foreground">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
