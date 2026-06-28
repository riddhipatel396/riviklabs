import { Palette, ShieldCheck, Zap, BrainCircuit, Layers, BadgeCheck, RefreshCw } from "lucide-react";

const items = [
  { icon: Palette, t: "Beautiful UI", d: "Pixel-honest interfaces built with care." },
  { icon: ShieldCheck, t: "Privacy First", d: "Your data stays yours. Always." },
  { icon: Zap, t: "Lightning Fast", d: "Native-feel performance everywhere." },
  { icon: BrainCircuit, t: "AI Powered", d: "Smart features that respect your time." },
  { icon: Layers, t: "Cross Platform", d: "iOS, Android, web — one experience." },
  { icon: BadgeCheck, t: "Reliable", d: "Tested, monitored, built to last." },
  { icon: RefreshCw, t: "Regular Updates", d: "Continuous improvements, every month." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <div className="text-sm font-medium text-primary uppercase tracking-widest">Why us</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            The details you feel, <span className="text-gradient">every day.</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-card border border-border/60 p-6 hover:shadow-card transition-shadow">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
