"use client";
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
    <div ref={cursorRef} className="w-[20px] h-[20px]  bg-red-500 fixed z-999">
      <div>{`${hoveredApt.rooms}-Zimmer Wohnung`}</div>
      <div>{`Whg. Nr. ${hoveredApt.number}`}</div>
      <div>{hoveredApt.status}</div>
      <div className="flex">
        <div>
          <p>Fläche</p>
        </div>
        <div>{`${hoveredApt.space} m²`}</div>
      </div>
      <div>
        <div>
          <p>Geschoss</p>
        </div>
        <div>{`${hoveredApt.floor}`}</div>
      </div>
      <div>
        <div>
          <p>Preis</p>
        </div>
        <div>{`CHF ${hoveredApt.price}`}</div>
      </div>
    </div>
  );
};

export default MouseCard;
