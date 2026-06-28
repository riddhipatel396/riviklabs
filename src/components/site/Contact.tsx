import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";

export function Contact() {
  const [sending, setSending] = useState(false);
  const submit = useServerFn(submitContact);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSending(true);
    try {
      await submit({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      form.reset();
      toast.success("Message sent. We'll be in touch shortly.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send. Try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 hero-bg opacity-60 -z-10" />
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-sm font-medium text-primary uppercase tracking-widest">Contact</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Let's build <span className="text-gradient">something great.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Questions, partnerships, or just want to say hi? We read every message.
            </p>

            <a
              href="mailto:hello@riviklabs.com"
              className="mt-8 inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" /> hello@riviklabs.com
            </a>

            <div className="mt-8 flex items-center gap-2">
              {[
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "X" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 grid place-items-center rounded-full glass hover:scale-105 transition-transform text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl glass shadow-card p-6 sm:p-8 space-y-4"
          >
            <div>
              <label htmlFor="name" className="text-xs font-medium text-muted-foreground">Name</label>
              <input
                id="name" name="name" required
                className="mt-1 w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-medium text-muted-foreground">Email</label>
              <input
                id="email" name="email" type="email" required
                className="mt-1 w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="msg" className="text-xs font-medium text-muted-foreground">Message</label>
              <textarea
                id="msg" name="message" required rows={4}
                className="mt-1 w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {sending ? "Sending..." : (<>Send message <Send className="h-4 w-4" /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
