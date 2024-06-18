"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { AptContext } from "../utils/createContext";
import MouseCard from "./MouseCard";
import svgData from "../utils/svgData.json";

const Wohnungsfinder = ({ apartments }) => {
  const { hoveredApt, setHoveredApt, bgImage } = useContext(AptContext);
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  let canvas;

  const initializeOrUpdateCanvas = () => {
    canvas = canvasRef.current;
    console.log("canvas", canvas);
    canvas.width = canvasContainerRef.current.offsetWidth;
    canvas.height = canvasContainerRef.current.offsetHeight;
    canvas.style.width = `${canvasContainerRef.current.offsetWidth}px`;
    canvas.style.height = `${canvasContainerRef.current.offsetHeight}px`;

    // drawCanvasSVGCombined(actualView);
  };

  useEffect(() => {
    drawCanvasSVGCombined(bgImage);
  }, []);

  const drawCanvasSVGCombined = (bgImage) => {
    canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const bounds = { width: 2400, height: 1350 };
    const scale = Math.max(
      canvas.width / bounds.width,
      canvas.height / bounds.height
    );
    const scaledWidth = bounds.width * scale;
    const scaledHeight = bounds.height * scale;
    const pathX = (canvas.width - scaledWidth) / 2;
    const pathY = (canvas.height - scaledHeight) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(pathX, pathY);
    ctx.scale(scale, scale);

    const svgPathsArr = Object.values(svgData[bgImage]);
    console.log("svgPathsArr", svgPathsArr);
    svgPathsArr.forEach((svgPath) => {
      ctx.save();
      const p = new Path2D(svgPath);
      ctx.lineWidth = 4;
      ctx.strokeStyle = "orange";
      ctx.stroke(p);
    });
  };

  const handleHover = (apartment) =>
    setHoveredApt({ ...apartment, hoveredInMain: true });

  return (
    <div
      style={{
        backgroundImage: `url('/images/${bgImage}.jpg')`,
        backgroundSize: "cover",
      }}
      ref={canvasContainerRef}
      className="w-screen h-screen bg-center"
    >
      {/* {hoveredApt && hoveredApt.hoveredInMain && (
        <MouseCard hoveredApt={hoveredApt} />
      )} */}

      <canvas
        ref={canvasRef}
        height={`${window.innerHeight}`}
        width={`${window.innerWidth}`}
        // className="w-full h-full border-red-500  border-2"
      />
      {/* <svg
        ref={canvasRef}
        className={`w-full h-full border-2 border-green-500`}
      >
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
      </svg> */}
    </div>
  );
};

export default Wohnungsfinder;
