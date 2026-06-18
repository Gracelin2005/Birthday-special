import { createFileRoute, Link } from "@tanstack/react-router";
import { X } from "lucide-react";

import childhood from "@/assets/child.jpeg";
import earlyYears from "@/assets/tee.jpeg";
import schoolDays from "@/assets/schl.jpeg";
import teenage from "@/assets/adv.jpeg";
import college from "@/assets/akaanaeng.jpeg";
import today from "@/assets/momtobe.jpeg";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — Happy Birthday" },
      {
        name: "description",
        content: "A walk through cherished memories across the years.",
      },
    ],
  }),
  component: TimelinePage,
});

const moments = [
  {
    year: "Childhood",
    image: childhood,
    message: "The beginning of a beautiful journey 💜",
  },
  {
    year: "Early Years",
    image: earlyYears,
    message: "Sorry ka un ponnana  school  pic ethum kedaikala.",
  },
  {
    year: "School Days",
    image: schoolDays,
    message: "THe innocent smile u had before 10th standard EPIC.",
  },
  {
    year: "Advocate Uma",
    image: teenage,
    message: "We all know that you can pull out anything...ah pakka job that suits YOU.",
  },
  {
    year: "Getting into two Era",
    image: college,
    message: "Chasing dreams and building the future you deserve.",
  },
  {
    year: "Mom to be",
    image: today,
    message: "The strongest and sweetest Mom you are going to be. 💜✨",
  },
];

function TimelinePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.95 0.05 320), oklch(0.98 0.02 310))",
      }}
    >
      <Link
        to="/"
        className="fixed top-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-[var(--shadow-soft)] hover:scale-110 transition-transform"
        aria-label="Back to home"
      >
        <X className="w-6 h-6 text-primary" />
      </Link>

      <main className="mx-auto max-w-4xl px-6 py-20">
        <header className="text-center mb-16 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.4em] text-primary">
            Your Journey
          </p>

          <h1 className="mt-3 text-5xl md:text-6xl font-display font-bold text-foreground">
            Through the Years
          </h1>

          <p className="mt-4 text-muted-foreground">
            Scroll down to walk through your story 💜
          </p>
        </header>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-primary-glow to-accent" />

          {moments.map((m, i) => (
            <div
              key={i}
              className="relative mb-20 grid grid-cols-2 gap-8 items-center animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={
                  i % 2 === 0
                    ? "text-right pr-8"
                    : "col-start-2 pl-8"
                }
              >
                <div className="inline-block rounded-3xl overflow-hidden shadow-[var(--shadow-soft)]">
                  <img
                    src={m.image}
                    alt={m.year}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full max-w-xs h-80 object-cover"
                  />
                </div>
              </div>

              <div
                className={
                  i % 2 === 0
                    ? "col-start-2 pl-8"
                    : "row-start-1 pr-8 text-right"
                }
              >
                <h3 className="text-3xl font-display font-bold text-primary">
                  {m.year}
                </h3>

                <p className="mt-3 text-foreground leading-relaxed">
                  {m.message}
                </p>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary shadow-lg" />
            </div>
          ))}
        </div>

        <section className="mt-12 rounded-3xl p-10 bg-white shadow-[var(--shadow-soft)] text-center animate-fade-up">
          <h2 className="text-3xl font-display font-bold text-primary">
            A Small Message
          </h2>

          <p className="mt-4 text-lg text-foreground leading-relaxed">
            Even when you had to fight for everything you needed, you never gave
            up. You stood strong for yourself while always caring for us. Even
            when people misunderstood you, you kept doing what was right for our
            own good. <strong>"You fought battles I never saw, just to give us a
            better tomorrow."</strong> I may be younger, but I will always stand
            by your side and do my best to keep you happy, just as you have
            always done for me. 💜✨
          </p>
        </section>
      </main>
    </div>
  );
}

export default TimelinePage;