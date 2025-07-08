import React, { useEffect, useState } from "react";
import InteractiveDice from "./InteractiveDice";

const DiceWindow = ({ onClose }) => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateIn(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setAnimateIn(false);
    setTimeout(onClose, 400); // allow exit animation to play
  };

  return (
    <div className="fixed inset-0 z-50 bg-none bg-opacity-30 flex items-center justify-center overflow-hidden">
      {/* Close button */}
      <button
        onClick={handleClose}
        className="thumb-c absolute md:top-28 md:right-112 right-21 top-62 text-dark text-3xl font-bold hover:text-red-400 z-50 transition duration-300"
      >
        &times;
      </button>

      {/* Dice container with cool pop animation */}
      <div
        className={`z-40 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          animateIn
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-100 translate-y-0"
        }`}
      >
        <InteractiveDice />
      </div>
    </div>
  );
};

export default DiceWindow;
