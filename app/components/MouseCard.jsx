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
      className="bg-white rounded-bl-xl rounded-r-xl px-4 py-2 fixed z-999"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 bg-${hoveredApt.status} rounded-full`}></div>
          <div className="text-sm">{`Whg. Nr. ${hoveredApt.number}`}</div>
        </div>
        <Image src="/images/like.svg" width={32} height={32} alt="like" />
      </div>
      <div>
        <div className="text-lg">{`${hoveredApt.rooms}-Zimmer Wohnung`}</div>
      </div>
    </div>
  );
};

export default MouseCard;
