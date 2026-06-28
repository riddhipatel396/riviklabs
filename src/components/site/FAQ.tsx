import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Who builds Rivik Labs products?", a: "A small, independent team of designers and engineers who care deeply about craft." },
  { q: "Are your apps available on Android?", a: "Yes — most of our apps ship for Android, and several are also available on web." },
  { q: "Will there be iOS apps?", a: "Yes. iOS versions are on the roadmap for our current and upcoming products." },
  { q: "Is privacy important to you?", a: "Privacy is a foundation, not a feature. We minimize data collection and never sell your data." },
  { q: "Do you use AI responsibly?", a: "We use AI where it genuinely helps and we're transparent about how it's used in each product." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <div className="text-sm font-medium text-primary uppercase tracking-widest">FAQ</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Questions, answered.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border/60 bg-card px-5 shadow-card data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="font-display text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
