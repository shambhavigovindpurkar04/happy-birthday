import { useNavigate } from "react-router-dom";
import "./Arrows.css";

export default function Arrows({
  onNext,
  onPrev,
  toNext,
  toPrev,
  disablePrev = false,
  disableNext = false,
  variant = "default" // new
}) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (toNext) navigate(toNext);
    else if (onNext) onNext();
  };

  const handlePrev = () => {
    if (toPrev) navigate(toPrev);
    else if (onPrev) onPrev();
  };

  return (
    <div className={`arrows-wrapper ${variant}`}>
      <button
        className="arrow-btn"
        onClick={handlePrev}
        disabled={disablePrev}
      >
        ←
      </button>

      <button
        className="arrow-btn"
        onClick={handleNext}
        disabled={disableNext}
      >
        →
      </button>
    </div>
  );
}
