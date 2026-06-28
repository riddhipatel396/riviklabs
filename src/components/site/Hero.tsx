import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 hero-bg animate-gradient-pan -z-10" />
      <div className="absolute inset-0 grid-bg -z-10 opacity-60" />

      {/* Floating glass cards */}
      <div className="pointer-events-none absolute -top-10 left-[8%] hidden lg:block animate-float-slow">
        <div className="glass shadow-card rounded-2xl p-4 w-56 rotate-[-6deg]">
          <div className="text-xs text-muted-foreground">AI Career Copilot</div>
          <div className="mt-1 font-display font-semibold">Resume rewrite ✨</div>
          <div className="mt-3 h-1.5 rounded-full bg-secondary overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-primary to-accent" />
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute top-24 right-[6%] hidden lg:block animate-float-slow"
        style={{ animationDelay: "-3s" }}
      >
        <div className="glass shadow-card rounded-2xl p-4 w-52 rotate-[5deg]">
          <div className="text-xs text-muted-foreground">Focus Timer</div>
          <div className="mt-2 font-display text-3xl font-bold tabular-nums">24:18</div>
          <div className="mt-2 text-xs text-success">Deep work streak · 4d</div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-in">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          New · AI Career Copilot in beta
        </div>

        <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground animate-fade-in">
          Building apps <br className="hidden sm:block" />
          <span className="text-gradient animate-gradient-pan">people love.</span>
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-in">
          Rivik Labs creates AI-powered applications, mobile experiences, and productivity tools
          that help millions work smarter and live better.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-in">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-all hover:scale-[1.02] shadow-glow"
          >
            Explore Apps
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
          <span>Privacy-first</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span>Cross-platform</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span>Built with AI</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span>Independently crafted</span>
        </div>
      </div>
    </section>
  );
}
