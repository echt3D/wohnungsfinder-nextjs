"use client";
import { useContext } from "react";
import { AptContext } from "../utils/createContext";
const Navigations = () => {
  const { bgImage, setBgImage } = useContext(AptContext);

  const switchRight = () =>
    bgImage < 1009 ? setBgImage(bgImage + 1) : setBgImage(bgImage);
  const switchLeft = () =>
    bgImage > 1001 ? setBgImage(bgImage - 1) : setBgImage(bgImage);

  return (
    <div className="absolute bottom-0 right-0 flex flex-row gap-8">
      <button onClick={() => switchLeft()} className="bg-red-500 p-4">
        left
      </button>
      <button onClick={() => switchRight()} className="bg-red-500 p-4">
        right
      </button>
    </div>
  );
};

export default Navigations;
