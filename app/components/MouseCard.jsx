"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
const MouseCard = ({ hoveredApt }) => {
  const cursorRef = useRef(null);

  const moveCursor = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX + 20,
      y: e.clientY + 20,
      startAt: { x: e.clientX + 20, y: e.clientY + 20 },
    });
  };

  useEffect(() => {
    gsap.set(cursorRef, {
      xPercent: 100,
      yPercent: 100,
    });
    window.addEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="bg-white rounded-bl-2xl rounded-r-2xl px-4 py-2 fixed z-999"
    >
      <div className="flex items-center justify-between">
        <div
          className={`px-2 flex items-center gap-2 bg-${hoveredApt.status} rounded-2xl bg-opacity-30`}
        >
          <div className={`w-2 h-2 bg-${hoveredApt.status} rounded-full`}></div>
          <p className={`text-sm text-${hoveredApt.status}`}>
            {hoveredApt.status}
          </p>
        </div>
        <div className="text-sm">{`Whg. Nr. ${hoveredApt.number}`}</div>
      </div>
      <div>
        <div className="text-lg">{`${hoveredApt.rooms}-Zimmer Wohnung`}</div>
      </div>
    </div>
  );
};

export default MouseCard;
