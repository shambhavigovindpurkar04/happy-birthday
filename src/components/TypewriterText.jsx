import { useEffect, useState } from "react";

export default function TypewriterText({
  text = "",
  speed = 50,
  start = false,
  onComplete,
  className = ""
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (index === text.length && onComplete) {
      onComplete();
    }
  }, [start, index, text, speed, onComplete]);

  useEffect(() => {
    if (!start) {
      setDisplayedText("");
      setIndex(0);
    }
  }, [start]);

  return (
    <pre className={`typewriter-text ${className}`}>
      {displayedText}
      {start && index < text.length && <span className="cursor">|</span>}

      <style>{`
        .typewriter-text {
          font-family: 'Courier New', monospace;
          white-space: pre-wrap;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s steps(1) infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </pre>
  );
}
