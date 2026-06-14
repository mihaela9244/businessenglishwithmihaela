import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "English with Mihaela — Business English Tutoring" },
      { name: "description", content: "One-to-one Business English lessons for professionals. Workplace communication, interviews, meetings and emails — tailored to your career goals." },
      { property: "og:title", content: "English with Mihaela — Business English Tutoring" },
      { property: "og:description", content: "One-to-one Business English lessons for professionals — tailored to your career goals." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-12 pb-20 md:pt-20 md:pb-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow"><span className="text-accent">●</span> Now accepting students · 2026</p>
            <h1 className="display mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Business English,<br />
              <span className="italic text-accent">spoken with confidence.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              One-to-one tutoring for professionals who need to negotiate, present and write in English at the level their career demands. Tailored lessons. Real corporate context. No textbook autopilot.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/85 transition-colors"
              >
                Book a trial lesson
              </Link>
              <Link
                to="/lessons"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground/60 transition-colors"
              >
                See lesson plans →
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <dt className="eyebrow">Certified</dt>
                <dd className="font-serif text-3xl mt-1">150<span className="text-accent">h</span></dd>
                <p className="text-xs text-muted-foreground mt-1">TEFL training</p>
              </div>
              <div>
                <dt className="eyebrow">Focus</dt>
                <dd className="font-serif text-3xl mt-1">C1<span className="text-muted-foreground">–</span>C2</dd>
                <p className="text-xs text-muted-foreground mt-1">Executive level</p>
              </div>
              <div>
                <dt className="eyebrow">Format</dt>
                <dd className="font-serif text-3xl mt-1">1:1</dd>
                <p className="text-xs text-muted-foreground mt-1">Online · Google Meet</p>
              </div>
            </dl>
          </div>
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
              <img
                src={heroImage}
                alt="A leather notebook, fountain pen and porcelain coffee cup on a walnut desk"
                className="w-full h-full object-cover"
                width={1080}
                height={1440}
              />
              <div className="absolute inset-0 ring-1 ring-foreground/10" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-background border border-border/60 px-5 py-4 rounded-sm shadow-lg max-w-xs">
              <p className="eyebrow text-accent">Tutor</p>
              <p className="font-serif text-2xl mt-1 leading-tight">Mihaela Harieva</p>
              <p className="text-xs text-muted-foreground mt-1">BSc International Business · TEFL & Business English certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / CREDENTIAL STRIP */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-xs eyebrow">
          <span className="text-foreground">Specialisations</span>
          <span>Workplace communication</span>
          <span className="text-accent">·</span>
          <span>Negotiation</span>
          <span className="text-accent">·</span>
          <span>Interview prep</span>
          <span className="text-accent">·</span>
          <span>Email & reports</span>
          <span className="text-accent">·</span>
          <span>Finance & accounting</span>
          <span className="text-accent">·</span>
          <span>Presentations</span>
        </div>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">01 — The approach</p>
            <h2 className="display text-4xl md:text-5xl mt-4">
              Not grammar drills.<br />
              <span className="italic text-accent">Real rehearsal.</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            <p className="text-xl leading-relaxed text-foreground/85 max-w-2xl">
              Every lesson is built around the situations you actually face — the board meeting on Thursday, the cold email to a New York client, the interview at a London bank.
            </p>
            <div className="grid sm:grid-cols-3 gap-px bg-border">
              {[
                { n: "I", t: "Diagnose", d: "We map the exact gaps between where your English is and where your role demands it to be." },
                { n: "II", t: "Rehearse", d: "Live role-play of meetings, negotiations and presentations — with diplomatic phrasing built in." },
                { n: "III", t: "Refine", d: "Pronunciation, intonation and written tone polished until they match the room you're walking into." },
              ].map((s) => (
                <div key={s.n} className="bg-background p-6">
                  <p className="font-serif text-accent text-xl">{s.n}</p>
                  <p className="font-serif text-2xl mt-2">{s.t}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-2 hidden md:block">
            <p className="font-serif text-7xl text-accent leading-none">“</p>
          </div>
          <blockquote className="md:col-span-10 font-serif text-3xl md:text-5xl leading-tight">
            By choosing to enhance your Business English with me, you'll gain practical knowledge tailored to your career goals — enabling you to communicate effectively and <span className="italic text-accent">confidently</span> in professional settings.
          </blockquote>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="eyebrow">02 — What we work on</p>
            <h2 className="display text-4xl md:text-5xl mt-4">Programmes</h2>
          </div>
          <Link to="/lessons" className="text-sm underline underline-offset-4 hover:text-accent">
            Browse sample lesson plans →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {[
            {
              t: "Executive Communication",
              level: "C1 – C2",
              d: "Handling difficult discussions diplomatically, push-back without friction, executive presence under pressure.",
            },
            {
              t: "Interview & Career Prep",
              level: "B2 – C1",
              d: "Behavioural questions, salary negotiation, telling your professional story in fluent, persuasive English.",
            },
            {
              t: "Finance & Accounting English",
              level: "B1 – C1",
              d: "Financial terminology, P&L summaries, investor pitches and reading executive reports with precision.",
            },
            {
              t: "Professional Writing",
              level: "B1 – C2",
              d: "Emails, proposals, reports and LinkedIn — formal tone, clear structure, no awkward translation.",
            },
          ].map((s) => (
            <article key={s.t} className="bg-background p-8 md:p-10 group">
              <div className="flex items-baseline justify-between">
                <p className="font-serif text-2xl md:text-3xl">{s.t}</p>
                <span className="text-xs eyebrow text-accent">{s.level}</span>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pb-24">
        <div className="border border-border rounded-sm p-10 md:p-16 grid md:grid-cols-12 gap-8 items-center bg-secondary/30">
          <div className="md:col-span-8">
            <p className="eyebrow">Trial lesson</p>
            <h3 className="display text-3xl md:text-5xl mt-4">
              Let's plan your first lesson.
            </h3>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Tell me about your role and your goals. I'll reply within 24 hours with a tailored proposal and a free 20-minute consultation slot.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/85 transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
