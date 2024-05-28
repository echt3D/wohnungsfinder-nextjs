"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
const MouseCard = () => {
  const cursorRef = useRef(null);

  const moveCursor = (e) => {
    gsap.fromTo(
      cursorRef.current,
      {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      },
      {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      }
    );
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
      className="w-[20px] h-[20px] rounded-full bg-red-500 fixed z-999"
    ></div>
  );
};

export default MouseCard;
