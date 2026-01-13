// =========================
// MemoryCard.jsx
// Single memory card (photo + caption + subtle animation)
// =========================

export default function MemoryCard({ image, title, caption, active }) {
  return (
    <div className={`memory-card ${active ? "active" : ""}`}>
      <style>{`
        .memory-card {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .memory-card.active {
          opacity: 1;
          transform: translateX(0);
        }

        .memory-image {
          width: 420px;
          height: 260px;
          object-fit: cover;
          border-radius: 16px;
          border: 3px solid #000;
          box-shadow: 6px 6px 0 rgba(0,0,0,0.15);
          margin-bottom: 18px;
        }

        .memory-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .memory-caption {
          font-size: 16px;
          opacity: 0.8;
          max-width: 420px;
          text-align: center;
        }
      `}</style>

      <img src={image} alt={title} className="memory-image" />
      <div className="memory-title">{title}</div>
      <div className="memory-caption">{caption}</div>
    </div>
  );
}
