import { useState } from "react";

export function BirthdayCake() {
  const [blown, setBlown] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);

  const handleClick = () => {
    setBlown(true);
    setShowFlowers(true);
    setTimeout(() => setShowFlowers(false), 4500);
    // relight after a while so user can do it again
    setTimeout(() => setBlown(false), 5000);
  };

  const flowers = ["🌸", "🌷", "🌹", "🌺", "💐", "🌼", "💜", "✨"];
  const drops = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    emoji: flowers[i % flowers.length],
    left: Math.random() * 100,
    delay: Math.random() * 1.2,
    duration: 2.5 + Math.random() * 2,
    size: 20 + Math.random() * 24,
    rotate: Math.random() * 360,
  }));

  return (
    <div className="relative flex flex-col items-center">
      <p className="mb-4 text-white/90 font-display italic text-lg">
        {blown ? "Make a wish! 💜" : "Tap the cake to blow the candles ✨"}
      </p>

      <button
        onClick={handleClick}
        aria-label="Birthday cake"
        className="relative group transition-transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        <svg width="220" height="200" viewBox="0 0 220 200" className="drop-shadow-2xl">
          {/* Plate */}
          <ellipse cx="110" cy="180" rx="95" ry="10" fill="oklch(0.4 0.1 300)" opacity="0.4" />
          <ellipse cx="110" cy="178" rx="90" ry="8" fill="oklch(0.95 0.03 320)" />

          {/* Bottom tier */}
          <rect x="30" y="130" width="160" height="50" rx="6" fill="oklch(0.55 0.22 305)" />
          <path d="M30 140 Q50 130 70 140 T110 140 T150 140 T190 140 L190 132 L30 132 Z" fill="oklch(0.85 0.12 330)" />
          {/* dots */}
          {[50, 80, 110, 140, 170].map((x) => (
            <circle key={x} cx={x} cy={160} r="3" fill="oklch(0.95 0.05 320)" />
          ))}

          {/* Top tier */}
          <rect x="65" y="85" width="90" height="45" rx="5" fill="oklch(0.75 0.18 320)" />
          <path d="M65 95 Q80 85 95 95 T125 95 T155 95 L155 87 L65 87 Z" fill="oklch(0.95 0.05 320)" />

          {/* Candles */}
          {[85, 110, 135].map((x) => (
            <g key={x}>
              <rect x={x - 3} y="55" width="6" height="30" fill="oklch(0.98 0.02 310)" />
              <rect x={x - 3} y="60" width="6" height="2" fill="oklch(0.55 0.22 305)" />
              {/* wick */}
              <line x1={x} y1="55" x2={x} y2="50" stroke="oklch(0.2 0 0)" strokeWidth="1.5" />
              {/* flame */}
              {!blown && (
                <g className="origin-bottom" style={{ transformOrigin: `${x}px 50px` }}>
                  <ellipse cx={x} cy="44" rx="4" ry="8" fill="oklch(0.85 0.18 70)">
                    <animate attributeName="ry" values="8;9.5;8" dur="0.6s" repeatCount="indefinite" />
                  </ellipse>
                  <ellipse cx={x} cy="46" rx="2.5" ry="5" fill="oklch(0.95 0.2 95)" />
                </g>
              )}
              {blown && (
                <g>
                  <path
                    d={`M${x - 2} 48 Q${x} 40 ${x + 2} 32`}
                    stroke="oklch(0.7 0.02 300)"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                    strokeLinecap="round"
                  />
                </g>
              )}
            </g>
          ))}
        </svg>
      </button>

      {/* Falling flowers overlay */}
      {showFlowers && (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
          {drops.map((d) => (
            <span
              key={d.id}
              className="absolute animate-flower-fall"
              style={{
                left: `${d.left}%`,
                top: "-50px",
                fontSize: `${d.size}px`,
                animationDelay: `${d.delay}s`,
                animationDuration: `${d.duration}s`,
                transform: `rotate(${d.rotate}deg)`,
              }}
            >
              {d.emoji}
            </span>
          ))}
          <div className="absolute inset-x-0 top-1/3 text-center animate-bounce-in">
            <p className="font-display text-5xl md:text-7xl font-bold text-white drop-shadow-[0_4px_20px_rgba(168,85,247,0.8)]">
              Wish Granted! 💜
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
