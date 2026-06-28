const stack = [
  "React", "Next.js", "Expo", "React Native", "TypeScript",
  "Node.js", "Firebase", "Supabase", "OpenAI", "Gemini", "AI",
];

export function Tech() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="text-sm font-medium text-primary uppercase tracking-widest">Tech we love</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Modern foundations, picked deliberately.
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {stack.map((s) => (
            <span
              key={s}
              className="glass shadow-card rounded-full px-4 py-2 text-sm font-medium text-foreground hover:scale-105 transition-transform"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
