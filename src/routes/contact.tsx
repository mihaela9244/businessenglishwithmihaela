import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — English with Mihaela" },
      { name: "description", content: "Get in touch to book a trial Business English lesson. Reply within 24 hours with a tailored proposal and a free 20-minute consultation." },
      { property: "og:title", content: "Contact — English with Mihaela" },
      { property: "og:description", content: "Book a trial Business English lesson. Reply within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto max-w-5xl px-6 md:px-10 pt-16 md:pt-24 pb-24 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <p className="eyebrow">Contact</p>
        <h1 className="display text-5xl md:text-6xl mt-6">
          Let's <span className="italic text-accent">talk.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Tell me about your role and what you'd like to improve. I'll reply within 24 hours with a proposal and a free 20-minute consultation slot.
        </p>
        <dl className="mt-10 space-y-5 text-sm">
          <div>
            <dt className="eyebrow">Email</dt>
            <dd className="font-serif text-2xl mt-1">
              <a href="mailto:hello@englishwithmihaela.com" className="hover:text-accent underline-offset-4 hover:underline">
                hello@englishwithmihaela.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Hours</dt>
            <dd className="mt-1 text-foreground/85">Mon — Fri · 09:00 — 19:00 EET</dd>
          </div>
          <div>
            <dt className="eyebrow">Platform</dt>
            <dd className="mt-1 text-foreground/85">Google Meet · Worldwide</dd>
          </div>
        </dl>
      </div>

      <div className="md:col-span-7">
        {sent ? (
          <div className="border border-border rounded-sm p-10 bg-secondary/40 text-center">
            <p className="font-serif text-accent text-5xl">✓</p>
            <p className="display text-3xl mt-4">Message received.</p>
            <p className="mt-3 text-muted-foreground">I'll be in touch within 24 hours. Looking forward to it.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="border border-border rounded-sm p-8 md:p-10 bg-background space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Your current role" name="role" placeholder="e.g. Senior Analyst, Asset Management" />
            <div>
              <label className="eyebrow block mb-2">Current English level</label>
              <select className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent text-foreground">
                <option>B1 — Intermediate</option>
                <option>B2 — Upper intermediate</option>
                <option>C1 — Advanced</option>
                <option>C2 — Mastery</option>
                <option>Not sure</option>
              </select>
            </div>
            <div>
              <label className="eyebrow block mb-2">What would you like to work on?</label>
              <textarea
                rows={5}
                className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent text-foreground resize-none"
                placeholder="Interview prep, executive presentations, finance vocabulary…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/85 transition-colors"
            >
              Send request →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-2">{label}{required && <span className="text-accent"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent text-foreground placeholder:text-muted-foreground/60"
      />
    </div>
  );
}