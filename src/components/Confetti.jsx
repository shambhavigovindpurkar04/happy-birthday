// =========================
// Confetti.jsx
// Top-falling soft confetti animation
// =========================

export default function Confetti({ active = false, count = 35 }) {
  if (!active) return null;

  return (
    <div className="confetti-container">
      <style>{`
        .confetti-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 999;
        }

        .confetti {
          position: absolute;
          top: -20px;
          width: 14px;
          height: 16px;
          background: hsl(var(--hue), 80%, 70%);
          border-radius: 2px;
          opacity: 0.9;
          animation: confetti-fall var(--duration) linear forwards;
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}vw`,
            '--hue': 25 + Math.random() * 40, // orange → pink range
            '--duration': `${6 + Math.random() * 4}s`, // slow & floaty
            animationDelay: `${Math.random() * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}
