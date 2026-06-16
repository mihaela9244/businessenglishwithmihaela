import { createFileRoute, Link } from "@tanstack/react-router";
import diplomaticPlan from "@/assets/diplomatic-plan.pdf.asset.json";
import financialPlan from "@/assets/financial-plan.pdf.asset.json";
import businessEnglishPlan from "@/assets/business-english-plan.pdf.asset.json";

export const Route = createFileRoute("/lessons")({
  head: () => ({
    meta: [
      { title: "Lessons & Sample Plans — English with Mihaela" },
      { name: "description", content: "Sample Business English lesson plans: executive communication, financial trends, diplomatic negotiation. Fully tailored to professionals and small groups." },
      { property: "og:title", content: "Sample Lesson Plans — English with Mihaela" },
      { property: "og:description", content: "Real, tailored lesson plans for executives, finance professionals and university students of business." },
    ],
  }),
  component: LessonsPage,
});

const samples = [
  {
    n: "01",
    title: "Handling Difficult Discussions Diplomatically",
    sub: "Executive frameworks seminar · C1 – C2",
    bullets: [
      "Linguistic framing to convert friction into collaborative inquiry",
      "Structural shifts that soften authority without losing it",
      "Prosodic transfer — pitch patterns that betray a non-native speaker",
    ],
    audience: "Adults · Professional sector · 4 students · Google Meet",
    pdf: diplomaticPlan.url,
  },
  {
    n: "02",
    title: "Financial Trends & Vocabulary",
    sub: "Business English & financial literacy · B2 – C1",
    bullets: [
      "Reading executive summaries for P&L language",
      "Pronunciation drill of core terms (profit, loss, revenue, income)",
      "Role-play: pitching an asset manager to an institutional investor",
    ],
    audience: "1st-year university · Finance & Accounting cohort",
    pdf: financialPlan.url,
  },
  {
    n: "03",
    title: "Predictive Financial Briefing",
    sub: "Live debate format · B2 – C1",
    bullets: [
      "Collaborative error correction and rephrasing of corporate prose",
      "Independent research, then live forecast debate on Google Meet",
      "Syntactic accuracy + remote-meeting fluency in one session",
    ],
    audience: "Small groups · 60-minute virtual classroom",
    pdf: businessEnglishPlan.url,
  },
];

function LessonsPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <p className="eyebrow">Lessons</p>
        <h1 className="display text-5xl md:text-7xl mt-6">
          Sample <span className="italic text-accent">lesson plans.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl text-muted-foreground leading-relaxed">
          Every plan I deliver is custom-built for the student. These are real examples — drawn from my Business English specialisation — to show the level and the texture of what we'll do together.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-10 pb-12 space-y-px bg-border border border-border">
        {samples.map((s) => (
          <article key={s.n} className="bg-background p-8 md:p-12 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="font-serif text-6xl text-accent leading-none">{s.n}</p>
              <p className="eyebrow mt-6">{s.audience}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground italic">{s.sub}</p>
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-foreground/85">
                    <span className="text-accent mt-1.5 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={s.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-accent hover:underline"
              >
                Download full lesson plan (PDF) →
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-10 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="eyebrow">How a lesson runs</p>
          <h3 className="display text-4xl mt-4">A typical 60 minutes.</h3>
        </div>
        <ol className="md:col-span-7 space-y-6">
          {[
            ["00:00 — 00:08", "Lead-in", "A short visual or scenario to warm up speaking and frame the topic."],
            ["00:08 — 00:23", "Presentation", "Authentic material — boardroom transcripts, executive summaries, reports."],
            ["00:23 — 00:38", "Guided practice", "Pair or solo analysis with active correction and target language drilling."],
            ["00:38 — 01:00", "Free production", "Live role-play: meeting, pitch, negotiation, or written task with feedback."],
          ].map(([time, title, desc]) => (
            <li key={time} className="grid grid-cols-12 gap-4 border-b border-border pb-6">
              <span className="col-span-4 font-serif text-sm text-accent">{time}</span>
              <div className="col-span-8">
                <p className="font-serif text-xl">{title}</p>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-10 pb-24">
        <div className="border border-border rounded-sm p-10 md:p-16 bg-secondary/30 text-center">
          <p className="display text-3xl md:text-5xl">
            Want a plan built for <span className="italic text-accent">your</span> role?
          </p>
          <Link to="/contact" className="inline-flex mt-8 items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/85 transition-colors">
            Request a tailored proposal
          </Link>
        </div>
      </section>
    </>
  );
}