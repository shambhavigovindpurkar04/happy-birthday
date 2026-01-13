// =========================
// Balloons.jsx
// Floating balloons animation component (IMPROVED)
// =========================

export default function Balloons({ count = 35 }) {
  const colors = [
    "#e63946", // red
    "#ff6f91", // pink
    "#8338ec", // purple
    "#3a86ff", // blue
    "#ffbe0b"  // yellow
  ];

  return (
    <div className="balloons-wrapper">
      <style>{`
        .balloons-wrapper {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .balloon {
          position: absolute;
          bottom: -140px;
          border-radius: 50%;
          animation: floatUp linear infinite;
        }

        .balloon::after {
          content: "";
          position: absolute;
          bottom: -18px;
          left: 50%;
          width: 1.5px;
          height: 18px;
          background: #555;
          transform: translateX(-50%);
        }

        @keyframes floatUp {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }
      `}</style>

      {Array.from({ length: count }).map((_, i) => {
        const size = 28 + Math.random() * 28;
        const left = Math.random() * 100;
        const duration = 3 + Math.random() * 2;
        const delay = Math.random() * 1;
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <span
            key={i}
            className="balloon"
            style={{
              width: size,
              height: size * 1.3,
              left: `${left}%`,
              background: color,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`
            }}
          />
        );
      })}
    </div>
  );
}
