"use client";
import { useContext, useRef, useState, useEffect } from "react";
import { AptContext } from "../utils/createContext";
import MouseCard from "./MouseCard";
import svgData from "../utils/svgData.json";

const Wohnungsfinder = ({ apartments }) => {
  const { hoveredApt, setHoveredApt, bgImage, setBgImage } =
    useContext(AptContext);

  return (
    <div
      style={{
        backgroundImage: `url('/images/${bgImage}.jpg')`,
      }}
      className="w-full h-full"
    >
      {hoveredApt && <MouseCard hoveredApt={hoveredApt} />}

      <svg className="w-full h-full">
        {svgData[bgImage].map((svg, i) => (
          <path
            key={i}
            d={`${svg}`}
            className={`transition-all duration-200 fill-transparent hover:fill-${hoveredApt && hoveredApt.status} opacity-70 cursor-pointer `}
            name={`wohnung-${i}`}
            onMouseEnter={() => setHoveredApt(apartments[i])}
            onMouseLeave={() => setHoveredApt(null)}
          />
        ))}
      </svg>
    </div>
  );
};

export default Wohnungsfinder;
