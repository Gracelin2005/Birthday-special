import { createFileRoute, Link } from "@tanstack/react-router";
import { X } from "lucide-react";

import sml from "@/assets/smi;.jpeg";
import ang from "@/assets/ang.jpeg";
import eee from "@/assets/eee.jpeg";
import poo from "@/assets/pot.jpeg";

export const Route = createFileRoute("/wishes")({
  head: () => ({
    meta: [
      { title: "Wishes — Happy Birthday" },
      {
        name: "description",
        content: "Heartfelt birthday wishes from friends and family.",
      },
    ],
  }),
  component: WishesPage,
});

const wishes = [
  {
    name: "Amma",
    relation: "Mother",
    image: sml,
    message:
      "From the moment you came into my life, you filled it with happiness and purpose. Watching you grow has been the greatest blessing of my life. May your days always be filled with love, laughter, and endless joy. Happy Birthday, my precious girl.",
  },
  {
    name: "Appa",
    relation: "Father",
    image: ang,
    message:
      "No matter how old you become, you'll always be my little princess. I am proud of the strong, kind, and beautiful person you've become. May every dream you have find its way to reality. Happy Birthday, sweetheart.",
  },
  {
    name: "Akka",
    relation: "Sister",
    image: eee,
    message:
      "Having you in my life is one of the greatest gifts I could ever ask for. Thank you for every laugh, every memory, and every moment we've shared together. May your year be as wonderful and special as you are.",
  },
  {
    name: "From Me ❤️",
    relation: "Your Biggest Fan",
    image: poo,
    message:
      "Happy Birthday to the person who brightens every room she walks into. You deserve all the happiness, love, success, and beautiful moments this world has to offer. Keep smiling, keep shining, and keep being the amazing person you are.",
  },
];

function WishesPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.96 0.04 330), oklch(0.98 0.02 310))",
      }}
    >
      <Link
        to="/"
        className="fixed top-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-[var(--shadow-soft)] hover:scale-110 transition-transform"
        aria-label="Back to home"
      >
        <X className="w-6 h-6 text-primary" />
      </Link>

      <main className="mx-auto max-w-3xl px-6 py-20">
        <header className="text-center mb-12 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.4em] text-primary">
            With Love
          </p>

          <h1 className="mt-3 text-5xl md:text-6xl font-display font-bold text-foreground">
            Birthday Wishes
          </h1>

          <p className="mt-4 text-muted-foreground">
            Messages filled with love, memories, and blessings 💜
          </p>
        </header>

        <div className="space-y-8">
          {wishes.map((w, i) => (
            <article
              key={i}
              className="flex gap-5 rounded-3xl p-6 bg-white shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-transform animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={w.image}
                alt={w.name}
                width={100}
                height={100}
                loading="lazy"
                className="w-24 h-24 rounded-full object-cover border-4 border-accent shrink-0"
              />

              <div className="flex-1">
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <h3 className="text-xl font-display font-bold text-primary">
                    {w.name}
                  </h3>

                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {w.relation}
                  </span>
                </div>

                <p className="mt-3 text-foreground leading-relaxed italic text-lg">
                  "{w.message}"
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}