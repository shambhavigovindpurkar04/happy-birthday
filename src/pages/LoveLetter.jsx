// =========================
// LoveLetter.jsx
// Page 3 – Animated Love Letter with Typewriter Effect (FINAL)
// =========================

import { useEffect, useState, useRef } from "react";
import Arrows from "../components/Arrows";
import Balloons from "../components/Balloons";

const LETTER_TEXT = `HHappy Birthday ❤️

It's been more than a year since I've known you and there have been so many moments that I treasure with you. These aren't like the big gestures.

They are the ones when we are standing near the lift and there's a weird lil space near it and I just look at you and you kiss me. I mean we are standing in THE COLLEGE, and that too a place where people could very clearly spot us — uhm not saying I don't like this, instead I loveeeeeee it (ofc hehe).

They are the ones when I yell at you for a very small thing, yet you handle it with so much composure and still talk to me in a low and calm voice.

They are the ones when you say "shambhavi bavlat ahes ka ithe basu nakos" when I'm on the verge of passing out on campus because I didn't listen to you.

They are the moments when you say that if my jeans were a cake you'd eat the whole cake — obviously you remembered that because I'm unhinged and make no sense half the time, but YOU REMEMBER THAT.

They are the moments when you listen to me talking about me getting drunk the night before with my cousins and we laugh on my stupid videos, sitting like a foot away from each other, waiting for Shruti — knowing very well it was just an excuse to stay longer with you.I remember the darkness that day , the sun had already set, and I looked at you while you were watching the videos and thought— isn't he just so cute , can't he just be mine.

I never have met a guy like you. So sweet, humble, calm, cute, intelligent and deserving. You made me believe in things I never thought I'd have.

If it ever feels like I don't notice enough or forget things, I promise I'll do better — and in my teeny-tiny defence, I remembered your birthday (iykyk).

Thank you for tolerating all my nonsense.
Thank you for being there.
Thank you for being my best friend.

A very very happy birthday to you, love 💗

If you ever got through those 10000 lines that I wrote , here are some fun facts for you : 
I just finished writing this letter on notes at 3:08am on 23 dec 2025 
I have severe cold and a lil bit of fever. 
I did not use chatgpt at all (ofc I mean) 
I teared up a lil while writing the letter 
I could write 10 more pages like this , but not a very practical thing to do right`;

export default function LoveLetter() {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const indexRef = useRef(0);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + LETTER_TEXT[indexRef.current]);
      indexRef.current++;

      if (indexRef.current >= LETTER_TEXT.length) {
        clearInterval(interval);
        setFinished(true);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <div className="letter-page">
      <style>{`
        .letter-page {
          min-height: 100vh;
          background: #fde6d7;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 0;
          position: relative;
        }

        .letter-container {
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .letter-title {
          font-size: 3.6rem;
          color: #ff5c8a;
          margin-bottom: 20px;
          font-family: "Patrick Hand", cursive;
          animation: fadeIn 0.6s ease forwards;
        }

        .start-btn {
          padding: 14px 30px;
          font-size: 18px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          background: #ff5c8a;
          color: white;
          margin-bottom: 25px;
          transition: transform 0.2s ease;
        }

        .start-btn:hover {
          transform: scale(1.05);
        }

        .letter-paper {
          width: 90%;
          max-width: 800px;
          max-height: 80vh;
          background: #f5f0e6;
          border: 3px solid #000;
          padding: 28px;
          box-shadow: 6px 6px 0 rgba(0,0,0,0.2);
          overflow-y: auto;
        }

        .letter-text {
          font-family: "Courier New", monospace;
          font-size: 17px;
          text-align: left;
          white-space: pre-wrap;
          line-height: 1.6;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .letter-paper {
            max-height: 75vh;
            padding: 22px;
          }

          .letter-text {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="letter-container">
        {started && <h1 className="letter-title">The Letter</h1>}

        {!started && (
          <button className="start-btn" onClick={() => setStarted(true)}>
            Open the letter 💌
          </button>
        )}

        <div className="letter-paper">
          <pre className="letter-text">{displayedText}</pre>
        </div>
      </div>

      {finished && <Balloons count={45} />}

      <Arrows toPrev="/memories" disableNext />
    </div>
  );
}
