import { useEffect, useState } from "react";
import "./MakeAWish.css";
import useMicBlow from "../hooks/useMicBlow";
import Arrows from "../components/Arrows";
import Confetti from "../components/Confetti";

import cakeOff from "../assets/cake_off.png";
import cakeFlame1 from "../assets/cake_flame1.png";
import cakeFlame2 from "../assets/cake_flame2.png";

export default function MakeAWish() {
  // idle → lit → blown
  const [stage, setStage] = useState("idle");
  const [flameFrame, setFlameFrame] = useState(0);

  // 🎤 Real mic blow detection
  const { start: startMic } = useMicBlow(() => {
    setStage("blown");
  });

  // 🔥 Flame flicker animation
  useEffect(() => {
    if (stage !== "lit") return;

    const interval = setInterval(() => {
      setFlameFrame((prev) => (prev === 0 ? 1 : 0));
    }, 450);

    return () => clearInterval(interval);
  }, [stage]);

  // 🎂 Handle cake click
  const handleCakeClick = async () => {
    if (stage !== "idle") return;

    setStage("lit");
    await startMic(); // mic permission starts here
  };

  // 🖼 Decide which cake image to show
  const getCakeImage = () => {
    if (stage === "idle" || stage === "blown") return cakeOff;
    return flameFrame === 0 ? cakeFlame1 : cakeFlame2;
  };

  return (
    <div className="makeawish-page">
      {/* 🎊 Confetti (top-falling, slow) */}
      <Confetti active={stage === "blown"} />

      <div className="content">
        {/* LEFT TEXT */}
        <div className="text-area">
          <h1>Happy Birthday Harsh</h1>

          <p className="instruction">Click the cake to light the candle</p>

          {stage !== "idle" && (
            <p className="instruction subtle">
              Blow the candles out
            </p>
          )}

          {stage === "blown" && (
            <p className="love-text">
              I loveee youu <span>❤️</span>
            </p>
          )}
        </div>

        {/* RIGHT CAKE */}
        <div className="cake-area">
          <img
            src={getCakeImage()}
            alt="Birthday Cake"
            className={`cake ${stage === "idle" ? "clickable" : ""}`}
            onClick={handleCakeClick}
          />
        </div>
      </div>

      {/* ➡️ Navigation Arrow */}
      {stage === "blown" && (
        <Arrows
          variant="romantic"
          toNext="/memories"
          disablePrev
        />
      )}
    </div>
  );
}
