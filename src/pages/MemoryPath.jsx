import { useEffect, useRef, useState } from "react";
import Arrows from "../components/Arrows";

import memory1 from "../assets/memories/memory-1.jpeg";
import memory2 from "../assets/memories/memory-2.jpeg";
import memory3 from "../assets/memories/memory-3.jpeg";
import memory4 from "../assets/memories/memory-4.jpeg";
import memory5 from "../assets/memories/memory-5.jpeg";

const memories = [
  {
    id: 1,
    image: memory1,
    text: "I remember how you said to shruti 'Amcha photo kadh' and there was kalpesh teasing me from the side🤭." 
  },
  {
    id: 2,
    image: memory2,
    text: "The cute hand holding and the new relationship awkwardness was so real in this random trip, sarita was third wheeling so hard😭."
  },
  {
    id: 3,
    image: memory3,
    text: "I absolutely love this picture of us, you look so good , lovelovelovelovelove hehe😋"
  },
  {
    id: 4,
    image: memory4,
    text: "When I look back at it , the twinning seems so obvious🤭, but genuinely I had so much fun that day and I hope you did to. "
  },
  {
    id: 5,
    image: memory5,
    text: "Ooooh random video call pictures I lovee , First of all LOVE that blanket , and second of all LOVE you"
  }
];

export default function MemoryPath() {
  const [visibleMemory, setVisibleMemory] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            visibleMemory < memories.length - 1
          ) {
            setVisibleMemory((v) => v + 1);
          }
        });
      },
      { threshold: 0.6 }
    );

    const current = sectionRefs.current[visibleMemory];
    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, [visibleMemory]);

  return (
    <div className="memory-page">
      <h1 className="memory-title">
        “Some memories that'll stick with me !!”
      </h1>

      <div className="memory-path">
        {memories.slice(0, visibleMemory + 1).map((memory, index) => (
          <section
            key={memory.id}
            className="memory-section"
            ref={(el) => (sectionRefs.current[index] = el)}
          >
            <div className="memory-card slide-fade">
              <img src={memory.image} alt="memory" />
              <p>“{memory.text}”</p>
            </div>
          </section>
        ))}
      </div>

      <Arrows toPrev="/" toNext="/letter" />

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap");

        .memory-page {
          background: #ffd6e8;
          padding: 60px 0 100px;
          font-family: "Patrick Hand", cursive;
        }

        .memory-title {
          text-align: center;
          font-size: 4.3rem;
          color: #b84b6d;
          margin-bottom: 60px;
        }

        .memory-path {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .memory-section {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .memory-card {
          background: white;
          width: 200vw;
          max-width: 1000px;
          border-radius: 28px;
          box-shadow: 0 18px 35px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          padding: 35px;
          gap: 35px;
          opacity: 0;
        }

        .slide-fade {
          animation: slideFadeIn 0.9s ease forwards;
        }

        .memory-card img {
          width: 35%;
          height: 240px;
          object-fit: cover;
          border-radius: 18px;
        }

        .memory-card p {
          font-size: 1.5rem;
          color: #444;
          line-height: 1.6;
        }

        @keyframes slideFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .memory-card {
            flex-direction: column;
            width: 90vw;
            text-align: center;
          }

          .memory-card img {
            width: 100%;
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
}
