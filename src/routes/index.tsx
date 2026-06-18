import { createFileRoute, Link } from "@tanstack/react-router";
import { FloatingBackground } from "@/components/FloatingBackground";
import { BirthdayCake } from "@/components/BirthdayCake";
import portrait from "@/assets/pot.jpeg";
import { Clock, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday 💜" },
      {
        name: "description",
        content:
          "A special birthday tribute filled with love, memories and wishes.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <FloatingBackground />

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-16">
        <header className="text-center animate-bounce-in">
          <p className="text-sm uppercase tracking-[0.4em] text-white/80">
            A Special Day
          </p>

          <h1 className="mt-4 font-display text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
            Happy Birthday
          </h1>

          <p className="mt-3 text-2xl text-white/90 font-display italic">
            ✨ AKKA ✨
          </p>
        </header>

        <section className="mt-12 mx-auto max-w-2xl rounded-3xl bg-white/85 backdrop-blur p-8 md:p-10 shadow-[var(--shadow-soft)] animate-fade-up">
          <p className="text-lg leading-relaxed text-foreground text-center">
            Happy Birthday to the strongest yet sweetest woman. From the
            little girl you once were to the incredible woman you are today, you
            have always been my biggest inspiration. The way you stand up for
            yourself, face every challenge with courage, and never give up makes
            me admire you more every day. "She believed she could, so she did"
            perfectly describes the woman you are. I am proud to say that I am
            the sweet little sister of such a strong and amazing woman. "A
            strong woman inspires others to find their own strength," and you
            inspire me in every stage of my life. 💜✨
          </p>
        </section>

        <div
          className="mt-12 flex justify-center animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-full opacity-60 blur-2xl"
              style={{ background: "var(--gradient-card)" }}
            />
            <img
              src={portrait}
              alt="Birthday girl"
              width={320}
              height={320}
              className="relative rounded-full w-72 h-72 md:w-80 md:h-80 object-cover border-8 border-white/80 shadow-[var(--shadow-glow)]"
            />
          </div>
        </div>

        <section
          className="mt-16 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          <BirthdayCake />
        </section>

        {/* Centered Cards */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
  <CardLink
    to="/timeline"
    icon={<Clock className="w-8 h-8" />}
    title="Your Journey"
    description="A journey through the years — from little dreams to big moments."
    delay="0.3s"
  />

  <CardLink
    to="/wishes"
    icon={<Heart className="w-8 h-8" />}
    title="Wishes"
    description="Messages from your loved ones."
    delay="0.35s"
  />

  <CardLink
    to="/uravu"
    icon={<Sparkles className="w-8 h-8" />}
    title="Akka Thangai Paasam"
    description="A secret little surprise from your sister — open with love. 💜"
    delay="0.4s"
  />
</section>
        <footer className="mt-16 text-center text-white/80 text-sm">
          Made with 💜 just for you
        </footer>
      </main>
    </div>
  );
}

function CardLink({
  to,
  icon,
  title,
  description,
  delay,
}: {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) {
  return (
    <Link
      to={to}
      className="group relative block rounded-3xl p-8 bg-white/90 backdrop-blur shadow-[var(--shadow-soft)] transition-all hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] animate-fade-up h-full"
      style={{ animationDelay: delay }}
    >
      <div
        className="flex items-center justify-center w-16 h-16 rounded-2xl text-primary-foreground mb-4 group-hover:scale-110 transition-transform"
        style={{ background: "var(--gradient-hero)" }}
      >
        {icon}
      </div>

      <h3 className="text-2xl font-display font-bold text-foreground">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">{description}</p>

      <span className="mt-4 inline-block text-primary font-semibold text-sm">
        Open →
      </span>
    </Link>
  );
}