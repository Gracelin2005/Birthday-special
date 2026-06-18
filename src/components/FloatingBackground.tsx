const emojis = ["🌸", "🌷", "💐", "🎉", "✨", "🎊", "💜", "🌺", "🦋"];

export function FloatingBackground() {
  const items = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    emoji: emojis[i % emojis.length],
    left: Math.random() * 100,
    duration: 8 + Math.random() * 10,
    delay: Math.random() * 10,
    size: 16 + Math.random() * 28,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {items.map((it) => (
        <span
          key={it.id}
          className="absolute animate-float-up"
          style={{
            left: `${it.left}%`,
            fontSize: `${it.size}px`,
            animationDuration: `${it.duration}s`,
            animationDelay: `${it.delay}s`,
          }}
        >
          {it.emoji}
        </span>
      ))}
    </div>
  );
}
