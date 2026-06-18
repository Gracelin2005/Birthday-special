import { createFileRoute, Link } from "@tanstack/react-router";
import { X } from "lucide-react";

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: "Special Video — Happy Birthday" },
      { name: "description", content: "A heartfelt birthday video surprise." },
    ],
  }),
  component: VideoPage,
});

function VideoPage() {
  return (
    <div className="min-h-screen flex items-center" style={{ background: "var(--gradient-hero)" }}>
      <Link
        to="/"
        className="fixed top-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-[var(--shadow-soft)] hover:scale-110 transition-transform"
        aria-label="Back to home"
      >
        <X className="w-6 h-6 text-primary" />
      </Link>

      <main className="mx-auto max-w-4xl px-6 py-20 w-full">
        <header className="text-center mb-10 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.4em] text-white/80">A Little Surprise</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-display font-bold text-white drop-shadow-lg">
            Just For You
          </h1>
          <p className="mt-4 text-white/90">Press play and enjoy 💜</p>
        </header>

        <div className="rounded-3xl overflow-hidden bg-black shadow-[var(--shadow-glow)] aspect-video animate-bounce-in">
          <video
            controls
            poster=""
            className="w-full h-full object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="mt-6 text-center text-white/80 text-sm italic">
          (Placeholder video — replace with your custom birthday video!)
        </p>
      </main>
    </div>
  );
}
