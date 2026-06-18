import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mihaela — Business English Tutor" },
      { name: "description", content: "Mihaela Harieva Shishmanova — Business English tutor with TEFL certification, a BSc in International Business and corporate experience in asset management." },
      { property: "og:title", content: "About Mihaela — Business English Tutor" },
      { property: "og:description", content: "TEFL & Business English certified tutor with corporate experience in asset management and a BSc in International Business." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const credentials = [
    { y: "2026", t: "Advanced TEFL — Teaching Business English", o: "The TEFL Org · 30-hour specialisation" },
    { y: "2026", t: "120-Hour Premier TEFL Certification", o: "The TEFL Org · TEFL / TESOL" },
    { y: "—", t: "BSc International Business (English-taught)", o: "University of Economics — Varna" },
    { y: "—", t: "Certificates in Business Administration & Digital Marketing", o: "Continuing professional development" },
  ];
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <p className="eyebrow">About</p>
        <h1 className="display text-5xl md:text-7xl mt-6">
          Hello, I'm <span className="italic text-accent">Mihaela.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl text-muted-foreground leading-relaxed">
          {"\n"}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-10 py-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            I am a certified Business English tutor. My whole education from primary to secondary has been in the UK.&nbsp;&nbsp;I hold a BSc in International Business — taught entirely in English from the University of Economics, Varna— and I've worked in corporate environments including asset management. That means I've sat in the meetings my students are preparing for.
          </p>
          <p>
            On top of that, I'm certified with a 120-hour Premier TEFL course and a 30-hour Teaching Business English specialisation. The combination lets me bring genuine industry context into every lesson, not just textbook scripts.
          </p>
          <p>
            My methodology is practical and goal-oriented. I don't drill grammar rules in isolation — I prepare you for the situations you'll actually face: writing the email, leading the call, handling the difficult question from a senior director without losing the room.
          </p>
        </div>
        <aside className="md:col-span-5">
          <div className="border border-border rounded-sm p-6 bg-secondary/40">
            <p className="eyebrow">At a glance</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex justify-between gap-4"><span className="text-muted-foreground">Based</span><span>Bulgaria · Online worldwide</span></li>
              <li className="flex justify-between gap-4"><span className="text-muted-foreground">Platform</span><span>Google Meet</span></li>
              <li className="flex justify-between gap-4"><span className="text-muted-foreground">Levels</span><span>B1 — C2</span></li>
              <li className="flex justify-between gap-4"><span className="text-muted-foreground">Format</span><span>1:1 · small groups</span></li>
              <li className="flex justify-between gap-4"><span className="text-muted-foreground">Languages</span><span>English · Bulgarian</span></li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-20">
          <p className="eyebrow">Credentials</p>
          <h2 className="display text-4xl md:text-5xl mt-4 mb-12">A record of training.</h2>
          <ul className="divide-y divide-border">
            {credentials.map((c) => (
              <li key={c.t} className="py-6 grid md:grid-cols-12 gap-4 items-baseline">
                <span className="md:col-span-2 font-serif text-2xl text-accent">{c.y}</span>
                <div className="md:col-span-7">
                  <p className="font-serif text-xl">{c.t}</p>
                  <p className="text-sm text-muted-foreground mt-1">{c.o}</p>
                </div>
                <span className="md:col-span-3 md:text-right eyebrow text-xs">Verified</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-10 py-20">
        <div className="border border-border rounded-sm p-10 md:p-16 text-center bg-secondary/30">
          <p className="eyebrow">Ready when you are</p>
          <p className="display text-3xl md:text-5xl mt-4">Let's build your plan.</p>
          <Link to="/contact" className="inline-flex mt-8 items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/85 transition-colors">
            Book a trial lesson
          </Link>
        </div>
      </section>
    </>
  );
}