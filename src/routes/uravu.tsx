import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import memory1 from "@/assets/first.jpeg";
import memory2 from "@/assets/tiger.jpeg";
import memory3 from "@/assets/memomaka.jpeg";
import memory4 from "@/assets/mid.jpeg";
import memory5 from "@/assets/eg.jpeg";
import memory6 from "@/assets/momm.jpeg";
import memory7 from "@/assets/momdadaka.jpeg";
import memory8 from "@/assets/recent.jpeg";
import memory9 from "@/assets/chiti.jpeg";
import sistersHug from "@/assets/sisters-hug.png";
import sistersLove from "@/assets/sisters-love.png";

export const Route = createFileRoute("/uravu")({
  head: () => ({
    meta: [
      { title: "Akka Thangai Uravu 💜" },
      { name: "description", content: "A special bond between sisters." },
    ],
  }),
  component: UravuPage,
});

type Stage = "question" | "no" | "anime" | "letter-closed" | "letter-open" | "pictures";

function UravuPage() {
  const [stage, setStage] = useState<Stage>("question");
  const [noShrunk, setNoShrunk] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <Link
        to="/"
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Back home"
      >
        <X className="w-6 h-6 text-primary" />
      </Link>

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-20 flex items-center justify-center min-h-screen">
        {stage === "question" && (
          <div className="text-center animate-bounce-in">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-12">
              Do you love me? 💜
            </h1>
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={() => setStage("anime")}
                className={`rounded-full bg-white text-primary font-bold shadow-[var(--shadow-glow)] transition-all duration-500 hover:scale-110 ${
                  noShrunk ? "px-20 py-10 text-4xl" : "px-10 py-5 text-2xl"
                }`}
              >
                YES 💖
              </button>
              <button
                onClick={() => {
                  setNoShrunk(true);
                  setStage("no");
                }}
                className={`rounded-full bg-white/80 text-foreground font-bold shadow-md transition-all duration-500 ${
                  noShrunk ? "px-3 py-1 text-xs opacity-50" : "px-10 py-5 text-2xl"
                }`}
              >
                NO
              </button>
            </div>
            {stage === "question" && noShrunk && <CryingFlood />}
          </div>
        )}

        {stage === "no" && (
          <div className="text-center animate-bounce-in">
            <CryingFlood />
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-12 relative z-10">
              Pleaseeee say yes 🥺
            </h1>
            <div className="flex items-center justify-center gap-6 relative z-10">
              <button
                onClick={() => setStage("anime")}
                className="rounded-full bg-white text-primary font-bold shadow-[var(--shadow-glow)] transition-all hover:scale-110 px-20 py-10 text-4xl animate-sparkle"
              >
                YES 💖
              </button>
              <button
                disabled
                className="rounded-full bg-white/60 text-foreground font-bold shadow-md px-2 py-0.5 text-[10px] opacity-40"
              >
                no
              </button>
            </div>
          </div>
        )}

        {stage === "anime" && (
          <div className="text-center">
            {/* Floating hearts */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute text-3xl animate-sparkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  {["💖", "💕", "✨", "🌸", "💜"][i % 5]}
                </span>
              ))}
            </div>

            <div className="relative inline-block animate-bounce-in">
              {/* Glow halo behind */}
              <div className="absolute -inset-10 rounded-full blur-3xl opacity-70"
                style={{ background: "radial-gradient(circle, rgba(244,114,182,0.6), transparent 70%)" }} />
              <img
                src={sistersHug}
                alt="Two sisters hugging"
                width={1024}
                height={1024}
                className="relative w-64 md:w-80 mx-auto drop-shadow-2xl animate-sparkle"
              />
              <div className="absolute -top-2 -right-2 text-5xl animate-sparkle">✨</div>
              <div className="absolute -bottom-2 -left-2 text-5xl animate-sparkle" style={{ animationDelay: "0.5s" }}>💖</div>
            </div>

            <div className="mt-8 mx-auto max-w-2xl rounded-[2rem] bg-white/90 backdrop-blur p-8 md:p-10 shadow-[var(--shadow-glow)] border-4 border-white animate-fade-up relative">
              {/* Speech-bubble pointer */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/90 rotate-45 border-l-4 border-t-4 border-white" />
              <div className="flex items-center justify-center gap-3 mb-3">
                <img src={sistersLove} alt="" width={1024} height={1024} className="w-16 h-16 object-contain" loading="lazy" />
                <p className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
                  I LOVE U <br className="md:hidden"/>MOREEEEE 💕
                </p>
                <img src={sistersLove} alt="" width={1024} height={1024} className="w-16 h-16 object-contain scale-x-[-1]" loading="lazy" />
              </div>
              <p className="mt-2 text-foreground/80 italic font-display">
                ...like a guiding star that always leads me through the darkest days✨
              </p>
              <p className="mt-2 text-foreground">
                Wait — I made something just for you 💌
              </p>
              <button
                onClick={() => setStage("letter-closed")}
                className="mt-6 px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform shadow-lg text-lg"
              >
                Catch the letter 💌
              </button>
            </div>
          </div>
        )}

        {stage === "letter-closed" && (
          <div className="text-center">
            <p className="text-white text-xl mb-8 animate-fade-up font-display italic">
              ✨ A little something flew in for you ✨
            </p>
            <button
              onClick={() => setStage("letter-open")}
              className="relative animate-letter-throw hover:scale-105 transition-transform group"
              aria-label="Open letter"
            >
              {/* Glow halo */}
              <div className="absolute -inset-10 rounded-full opacity-70 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(244,114,182,0.6), transparent 70%)" }} />

              {/* Envelope */}
              <div className="relative w-80 h-56 md:w-[28rem] md:h-72">
                {/* Envelope body */}
                <div className="absolute inset-0 rounded-xl shadow-2xl overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #e9d5ff 100%)" }}>
                  {/* Lace pattern */}
                  <div className="absolute inset-2 rounded-lg border-2 border-dashed border-pink-300/60" />
                  {/* Wax-seal-ish heart */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg"
                    style={{ background: "radial-gradient(circle at 30% 30%, #f472b6, #be185d)" }}>
                    💕
                  </div>
                  {/* Corner sparkles */}
                  <span className="absolute top-3 left-3 text-xl animate-sparkle">✨</span>
                  <span className="absolute top-3 right-3 text-xl animate-sparkle" style={{ animationDelay: "0.4s" }}>✨</span>
                  <span className="absolute bottom-3 right-3 text-xl animate-sparkle" style={{ animationDelay: "0.8s" }}>💖</span>
                </div>

                {/* Envelope flap */}
                <div className="absolute top-0 left-0 right-0 h-1/2"
                  style={{
                    background: "linear-gradient(180deg, #f9a8d4, #f472b6)",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  }} />

                {/* Vertical ribbon */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 shadow-lg"
                  style={{ background: "linear-gradient(180deg, #ec4899 0%, #be185d 50%, #ec4899 100%)" }} />
                {/* Horizontal ribbon */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-10 shadow-lg"
                  style={{ background: "linear-gradient(90deg, #ec4899 0%, #be185d 50%, #ec4899 100%)" }} />

                {/* Big bow on top */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl drop-shadow-lg group-hover:scale-125 transition-transform animate-sparkle">
                  🎀
                </div>
              </div>

              <span className="block mt-6 text-white font-display text-xl tracking-wide">
                💗 Pull the ribbon 💗
              </span>
            </button>
          </div>
        )}

        {stage === "letter-open" && (
          <div className="text-center w-full perspective-1000">
            <div className="relative mx-auto max-w-2xl animate-letter-open">
              {/* Decorative outer frame */}
              <div className="absolute -inset-6 rounded-[2rem] opacity-60 blur-2xl pointer-events-none"
                style={{ background: "var(--gradient-card)" }} />

              {/* Letter paper */}
              <div className="relative rounded-3xl p-10 md:p-14 shadow-[var(--shadow-glow)] border-4 border-white/80 overflow-hidden"
                style={{ background: "linear-gradient(160deg, #fff7fb 0%, #fce7f3 50%, #ede9fe 100%)" }}>
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 text-3xl opacity-70">🌸</div>
                <div className="absolute top-4 right-4 text-3xl opacity-70">🌸</div>
                <div className="absolute bottom-4 left-4 text-3xl opacity-70">💜</div>
                <div className="absolute bottom-4 right-4 text-3xl opacity-70">💜</div>

                {/* Lined-paper feel */}
                <div className="absolute inset-x-10 top-24 bottom-24 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(190,24,93,0.25) 32px)",
                  }} />

                <p className="relative text-primary font-display text-4xl font-bold mb-2">
                  My Dearest Sister,
                </p>
                <div className="relative w-24 h-1 mx-auto mb-6 rounded-full"
                  style={{ background: "linear-gradient(90deg, transparent, #be185d, transparent)" }} />

                <p className="relative text-foreground leading-loose text-lg font-display italic">
                  Happy Birthday, Akka! 💜

I know I can be a little annoying sometimes, but how can I not be when all I have is you? You may not realize it, but my world mostly revolves around you. I know you may find this cheesy, but honestly, you are everything I aspire to be: the prettiest, boldest, and smartest woman I know.

I also know that one day you'll be an amazing mother and a loving wife because your heart is filled with so much love and care. You have always been my safe place, the person I run to no matter what. Most of our memories may be filled with fights and arguments, but even in the middle of those fights, you always helped me find my way back.

Always remember that I will be there for you, no matter what happens. You might think I'm too young or not strong enough, but I promise I'll do everything I can to support you, just as you have always supported me. All I ever want is your love and encouragement, the same way you've showered me with it throughout my life.

Love you forever, Thangapullah. Im not sure if u liked this ..i just wanted to make something unique and special and i want that to made by me...i hope u liked itttttttt....SARANGHEEE💜✨

                  <br /><br />
                  Forever your Sweet Thangachi,
                  <br />
                  <span className="font-display italic text-primary text-xl">with all my love 💕</span>
                </p>

                <button
                  onClick={() => setStage("pictures")}
                  className="relative mt-8 px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  See our memories →
                </button>
              </div>
            </div>
          </div>
        )}

        {stage === "pictures" && <MemoriesCarousel />}

      </main>
    </div>
  );
}

function CryingFlood() {
  const emojis = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {emojis.map((_, i) => (
        <span
          key={i}
          className="absolute text-4xl animate-flower-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}vh`,
            animationDuration: `${3 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          😭
        </span>
      ))}
    </div>
  );
}

function MemoriesCarousel() {
  const memories = [
    {
      image: memory1,
      caption: "Our first memory, holding me even when it is hard for u💜",
    },
    {
      image: memory2,
      caption: "Always my goto ✨",
    },
    {
      image: memory3,
      caption: "Joyfull days 🌸",
    },
    {
      image: memory4,
      caption: "Smiles, laughter, and endless memories 💕",
    },
    {
      image: memory5,
      caption: "Growing up together, side by side 💜",
    },
    {
      image: memory6,
      caption: "Moms pillar🤍",
    },
    {
      image: memory7,
      caption: "Their forever princess ✨",
    },
    {
      image: memory8,
      caption: "Sweet days💖",
    },
    {
      image: memory9,
      caption: "Alagu chithiii 💜",
    },
  ];

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setTimeout(() => {
      setIdx((i) => (i + 1) % memories.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [idx, paused, memories.length]);

  const prev = () =>
    setIdx((i) => (i - 1 + memories.length) % memories.length);

  const next = () =>
    setIdx((i) => (i + 1) % memories.length);

  return (
    <div className="w-full">
      <h2 className="text-center font-display text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-3 animate-fade-up">
        Our Memories 💜
      </h2>

      <p className="text-center text-white/80 mb-8 font-display italic">
        One moment at a time — swipe through us ✨
      </p>

      <div
        className="relative mx-auto max-w-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative mx-auto rotate-[-1deg] bg-white rounded-2xl shadow-[var(--shadow-glow)] p-4 pb-16">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted">
            {memories.map((memory, i) => (
              <img
                key={i}
                src={memory.image}
                alt={memory.caption}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === idx
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              />
            ))}

            <span className="absolute -top-2 left-6 w-12 h-5 bg-yellow-200/80 rotate-[-8deg] shadow-sm" />
            <span className="absolute -top-2 right-6 w-12 h-5 bg-pink-200/80 rotate-[6deg] shadow-sm" />
          </div>

          <p className="absolute bottom-4 left-0 right-0 text-center font-display italic text-foreground/70 text-lg">
            {memories[idx].caption}
          </p>
        </div>

        <div className="mt-4 h-1.5 bg-white/30 rounded-full overflow-hidden">
          <div
            key={idx}
            className="h-full bg-white"
            style={{
              animation: paused
                ? "none"
                : "carousel-progress 5s linear forwards",
            }}
          />
        </div>

        <button
          onClick={prev}
          className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-7 h-7 text-primary" />
        </button>

        <button
          onClick={next}
          className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-7 h-7 text-primary" />
        </button>

        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="text-white font-display text-lg">
            {idx + 1}
            <span className="opacity-60">
              {" "} / {memories.length}
            </span>
          </p>

          <div className="flex gap-2 flex-wrap justify-center">
            {memories.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === idx
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
