"use client";
import { useContext } from "react";
import { AptContext } from "../utils/createContext";
import MouseCard from "./MouseCard";
import svgData from "../utils/svgData.json";

const Wohnungsfinder = ({ apartments }) => {
  const { hoveredApt, setHoveredApt, bgImage } =
    useContext(AptContext);

  const handleHover = (apartment) =>
    setHoveredApt({ ...apartment, hoveredInMain: true });
  return (
    <div
      style={{
        backgroundImage: `url('/images/${bgImage}.jpg')`,
      }}
      className="w-full h-full bg-center "
    >
      {hoveredApt && hoveredApt.hoveredInMain && (
        <MouseCard hoveredApt={hoveredApt} />
      )}

      <svg className="w-full h-full border-2 border-red-500">
        {svgData[bgImage].map((svg, i) => (
          <path
            key={i}
            d={`${svg}`}
            className={`transition-all duration-200 hover:fill-${hoveredApt && hoveredApt.status} opacity-70 cursor-pointer ${hoveredApt && hoveredApt.apt_id === apartments[i].apt_id ? `fill-${hoveredApt.status}` : "fill-transparent"}`}
            name={`wohnung-${i}`}
            onMouseEnter={() => handleHover(apartments[i])}
            onMouseLeave={() => setHoveredApt(null)}
          />
        ))}
      </svg>
    </div>
  );
};

export default Wohnungsfinder;
