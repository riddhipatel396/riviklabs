import {
  Briefcase,
  Wallet,
  Timer,
  KeyRound,
  CalendarCheck,
  Wrench,
  Gamepad2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const products = [
  { icon: Briefcase, name: "AI Career Copilot", desc: "Resume rewrites, interview prep, and tailored job matches powered by AI.", status: "Beta" },
  { icon: Wallet, name: "Expense Tracker", desc: "Track spending across accounts with zero spreadsheets and zero friction.", status: "Live" },
  { icon: Timer, name: "Focus Timer", desc: "A delightful pomodoro built around deep work and gentle streaks.", status: "Live" },
  { icon: KeyRound, name: "Password Manager", desc: "End-to-end encrypted, biometric-fast, beautifully simple.", status: "Soon" },
  { icon: CalendarCheck, name: "Habit Tracker", desc: "Build routines that stick with a calm, design-led interface.", status: "Soon" },
  { icon: Wrench, name: "Offline Utilities", desc: "Pocket tools — converters, calculators, scanners — fast and ad-free.", status: "Live" },
  { icon: Gamepad2, name: "Mini Games", desc: "Bite-sized casual games crafted for moments between meetings.", status: "Soon" },
  { icon: Sparkles, name: "More Coming Soon", desc: "New ideas land every quarter. Subscribe for first access.", status: "—" },
] as const;

const badge = (s: string) => {
  const map: Record<string, string> = {
    Live: "bg-success/15 text-success",
    Beta: "bg-accent/15 text-accent",
    Soon: "bg-warning/15 text-warning",
  };
  return map[s] ?? "bg-muted text-muted-foreground";
};

export function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="text-sm font-medium text-primary uppercase tracking-widest">Products</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl">
              A growing family of <span className="text-gradient">delightful apps.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Each app is built from the same belief — that the best tools disappear into your day.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map(({ icon: Icon, name, desc, status }) => (
            <article
              key={name}
              className="group relative rounded-2xl bg-card shadow-card p-6 border border-border/60 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${badge(status)}`}>
                  {status}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                Explore {name}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
