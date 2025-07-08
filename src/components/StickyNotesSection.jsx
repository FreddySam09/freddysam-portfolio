import React, { useRef, useEffect, useState } from "react";
import welcomeNote from "../assets/img/welcome-note.png";
import stickyNote from "../assets/img/sticky-note.png";
import doodleArrow from "../assets/img/doodle-arrow.png";
import doodlePaper from "../assets/img/doodle-paper.png";

export default function StickyNotesSection() {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth = 1.5;
    context.strokeStyle = "#333";
    context.lineCap = "round";
    setCtx(context);
  }, []);

  // Helper for getting position from event (mouse or touch)
  const getEventPos = (e) => {
    if (e.touches && e.touches.length > 0) {
      const rect = canvasRef.current.getBoundingClientRect();
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      };
    }
  };

  const startDrawing = (e) => {
    e.preventDefault();
    isDrawing.current = true;
    const { x, y } = getEventPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing.current) return;
    e.preventDefault();
    const { x, y } = getEventPos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = (e) => {
    e.preventDefault();
    isDrawing.current = false;
    ctx?.closePath();
  };

  return (
    <div className="relative w-full h-[200px] md:h-[260px] flex justify-center items-center md:justify-end">
      {/* White doodle paper */}
      <img
        src={doodlePaper}
        alt="Doodle Paper"
        className="absolute top-[2px] right-[50px] md:right-[250px] w-[130px] md:w-[180px] drop-shadow-md"
      />

      {/* Drawing canvas */}
      <canvas
        ref={canvasRef}
        width={130}
        height={150}
        className="absolute top-[2px] right-[50px] md:right-[250px] z-20 pencil-c touch-none"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />

      {/* Handwritten note */}
      <p className="absolute top-[25px] right-[10px] md:right-[175px] text-xs md:text-lg text-gray-700 rotate-[6deg] font-sue leading-tight z-30">
        do your little <br />
        doodle <span className="underline">here!</span>
      </p>

      {/* Arrow */}
      <img
        src={doodleArrow}
        alt="Arrow Doodle"
        className="absolute top-[45px] md:top-[60px] right-[30px] md:right-[220px] w-[25px] md:w-[40px] rotate-[10deg]"
      />

      {/* Welcome Note */}
      <img
        src={welcomeNote}
        alt="Welcome Note"
        className="absolute top-[90px] md:top-[115px] right-[150px] md:right-[370px] w-[100px] md:w-[132px] drop-shadow-md"
      />

      {/* Blue Sticky Note */}
      <img
        src={stickyNote}
        alt="Sticky Note"
        className="absolute top-[120px] md:top-[155px] right-[50px] md:right-[190px] w-[120px] md:w-[170px] drop-shadow"
      />

      {/* Text inside sticky note */}
      <div className="absolute top-[160px] md:top-[225px] right-[60px] md:right-[193px] text-[10px] md:text-[13px] leading-snug text-black w-[100px] md:w-[150px] font-medium font-figtree z-10">
        Studying ECE @ <br />
        Sri Sairam Engineering <br />
        College
      </div>
    </div>
  );
}